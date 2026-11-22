class PaperTheatre extends HTMLElement {
  private cleanup?: () => void;

  connectedCallback() {
    if (this.cleanup) return;
    const scenes = Array.from(this.querySelectorAll<HTMLElement>("[data-stage-scene]"));
    const captions = Array.from(this.querySelectorAll<HTMLElement>("[data-scene-caption]"));
    const cues = Array.from(this.querySelectorAll<HTMLAnchorElement>("[data-scene-cue]"));
    const wings = Array.from(this.querySelectorAll<HTMLElement>("[data-curtain-wing]"));
    const motionButton = this.querySelector<HTMLButtonElement>("[data-motion-control]");
    const motionLabel = this.querySelector("[data-motion-label]");
    const pull = this.querySelector<HTMLButtonElement>("[data-scene-pull]");
    const slot = this.querySelector<HTMLElement>("[data-pull-slot]");
    const status = this.querySelector("[data-theatre-status]");
    if (!scenes.length || !motionButton || !motionLabel) return;

    const events = new AbortController();
    const listen = { signal: events.signal };
    const reduceMotion = matchMedia("(prefers-reduced-motion: reduce)");
    const pauseKey = "paper-theatre-paused";
    let pausedByReader = false;
    try { pausedByReader = sessionStorage.getItem(pauseKey) === "true"; } catch { /* Storage is optional. */ }
    let selected = 0;
    let shown = 0;
    let revision = 0;
    let flights: Animation[] = [];
    let inView = true;

    const stopCurtain = () => {
      flights.forEach(flight => flight.cancel());
      flights = [];
    };
    const positionCurtain = (amount: number) => {
      stopCurtain();
      for (const wing of wings) wing.style.transform = `scaleX(${amount})`;
    };
    const moveCurtain = async (amount: number, duration: number) => {
      const starts = wings.map(wing => getComputedStyle(wing).transform);
      positionCurtain(amount);
      flights = wings.map((wing, i) => wing.animate(
        [{ transform: starts[i] }, { transform: `scaleX(${amount})` }],
        { duration, easing: amount === 0 ? "cubic-bezier(.18,.7,.2,1)" : "cubic-bezier(.48,0,.85,.6)" },
      ));
      await Promise.allSettled(flights.map(flight => flight.finished));
    };
    const canMove = () => this.dataset.motion === "on" && this.dataset.stageVisible !== "false";
    const display = (index: number) => {
      scenes.forEach((el, i) => { el.hidden = i !== index; });
      shown = index;
    };

    const settle = () => {
      revision++;
      positionCurtain(0);
      display(selected);
    };
    const setMotion = (play: boolean) => {
      this.dataset.motion = play ? "on" : "off";
      motionLabel.textContent = play ? "Pause motion" : "Play motion";
      if (!play) settle();
    };
    setMotion(!pausedByReader && !reduceMotion.matches);
    motionButton.hidden = false;
    motionButton.addEventListener("click", () => {
      const play = this.dataset.motion !== "on";
      pausedByReader = !play;
      try {
        if (pausedByReader) sessionStorage.setItem(pauseKey, "true");
        else sessionStorage.removeItem(pauseKey);
      } catch { /* The current page still honors the choice. */ }
      setMotion(play);
    }, listen);
    reduceMotion.addEventListener("change", () => setMotion(!reduceMotion.matches && !pausedByReader), listen);

    const markVisibility = () => {
      const visible = inView && !document.hidden && document.documentElement.dataset.presentation !== "classic";
      this.dataset.stageVisible = String(visible);
      if (!visible) settle();
    };
    const observer = new IntersectionObserver(([entry]) => {
      inView = entry.isIntersecting;
      markVisibility();
    });
    observer.observe(this);
    document.addEventListener("visibilitychange", markVisibility, listen);
    window.addEventListener("presentationchange", markVisibility, listen);
    markVisibility();

    const changeScenery = async (index: number, animate: boolean) => {
      const request = ++revision;
      if (!animate || !canMove()) { positionCurtain(0); display(index); return; }
      const incomingImages = Array.from(scenes[index].querySelectorAll("img"));
      await Promise.allSettled(incomingImages.filter(image => !image.complete).map(image => image.decode()));
      if (request !== revision) return;
      if (shown !== index) {
        await moveCurtain(1, 230);
        if (request !== revision) return;
        display(index);
      }
      await moveCurtain(0, 430);
    };

    const select = (index: number, userAction = false) => {
      if (index < 0 || index >= scenes.length) return;
      const changed = selected !== index;
      selected = index;
      this.dataset.scene = String(index);
      captions.forEach((caption, i) => { caption.hidden = index !== i; });
      cues.forEach((cue, i) => {
        if (i === index) cue.setAttribute("aria-current", "true");
        else cue.removeAttribute("aria-current");
      });
      const caption = captions[index];
      if (userAction && changed) {
        history.pushState(history.state, "", "#" + caption.dataset.sceneHash);
        if (status) status.textContent = `Scene ${index + 1} of ${scenes.length}. ${caption.querySelector("h2")?.textContent?.trim()}`;
      }
      void changeScenery(index, userAction && changed);
    };
    const restoreScene = () => select(Math.max(0, captions.findIndex(
      caption => "#" + caption.dataset.sceneHash === location.hash,
    )));
    restoreScene();
    window.addEventListener("hashchange", restoreScene, listen);
    cues.forEach((cue, index) => {
      cue.href = cue.dataset.sceneHref!;
      cue.addEventListener("click", event => {
        if (event.ctrlKey || event.metaKey || event.altKey || event.shiftKey) return;
        event.preventDefault();
        select(index, true);
      }, listen);
    });

    if (canMove() && !location.hash) {
      positionCurtain(1);
      void moveCurtain(0, 880);
    }

    if (pull && slot) {
      slot.hidden = false;
      let drag: { id: number; startY: number; distance: number } | undefined;
      let suppressClick = false;
      const release = () => {
        drag = undefined;
        pull.removeAttribute("data-pulling");
        pull.style.removeProperty("--pull-distance");
      };
      pull.addEventListener("pointerdown", event => {
        if (!event.isPrimary || event.button !== 0) return;
        drag = { id: event.pointerId, startY: event.clientY, distance: 0 };
        suppressClick = false;
        pull.setPointerCapture(event.pointerId);
        pull.dataset.pulling = "";
      }, listen);
      pull.addEventListener("pointermove", event => {
        if (event.pointerId !== drag?.id) return;
        drag.distance = Math.max(0, event.clientY - drag.startY);
        pull.style.setProperty("--pull-distance", Math.min(drag.distance * .65, 23) + "px");
        if (canMove() && drag.distance > 2) positionCurtain(Math.min(drag.distance / 58, 1));
      }, listen);
      pull.addEventListener("pointerup", event => {
        if (event.pointerId !== drag?.id) return;
        if (drag.distance >= 9) {
          suppressClick = true;
          select((selected + 1) % scenes.length, true);
        }
        release();
      }, listen);
      pull.addEventListener("lostpointercapture", () => {
        if (!drag) return;
        release();
        positionCurtain(0);
      }, listen);
      pull.addEventListener("click", event => {
        if (event.detail === 0 || !suppressClick) select((selected + 1) % scenes.length, true);
        suppressClick = false;
      }, listen);
    }

    this.cleanup = () => {
      revision++;
      events.abort();
      observer.disconnect();
      stopCurtain();
    };
  }

  disconnectedCallback() {
    this.cleanup?.();
    this.cleanup = undefined;
  }
}

if (!customElements.get("paper-theatre")) customElements.define("paper-theatre", PaperTheatre);
