// Construct a broadcast only after the listener turns the receiver on.
export class Broadcast {
  private readonly context = new AudioContext();
  private readonly volume = this.context.createGain();
  private readonly cache = new Map<number, AudioBuffer>();
  private request?: AbortController;
  private voice?: { source: AudioBufferSourceNode; level: GainNode };
  private closed = false;

  constructor() {
    this.volume.gain.value = 0.64;
    this.volume.connect(this.context.destination);
  }

  async tune(station: number) {
    const context = this.context;
    this.request?.abort();
    const request = new AbortController();
    this.request = request;

    await context.resume();
    if (this.closed || request.signal.aborted) return;
    if (this.voice) this.retuneSweep();

    const channel = station % 4;
    let buffer = this.cache.get(channel);
    if (!buffer) {
      const response = await fetch(`/radio/station-${channel + 1}.mp3`, { signal: request.signal });
      if (!response.ok) throw new Error("Station unavailable");
      buffer = await context.decodeAudioData(await response.arrayBuffer());
      if (this.closed || request.signal.aborted) return;
      this.cache.set(channel, buffer);
    }

    this.fadeVoice();
    const source = context.createBufferSource();
    const level = context.createGain();
    const now = context.currentTime;
    source.buffer = buffer;
    source.loop = true;
    level.gain.setValueAtTime(0, now);
    level.gain.linearRampToValueAtTime(1, now + .18);
    source.connect(level).connect(this.volume);
    source.onended = () => { source.disconnect(); level.disconnect(); };
    source.start();
    this.voice = { source, level };
  }

  private retuneSweep() {
    const context = this.context;
    const now = context.currentTime;
    const oscillator = context.createOscillator();
    const level = context.createGain();
    oscillator.type = "sine";
    oscillator.frequency.setValueAtTime(710, now);
    oscillator.frequency.exponentialRampToValueAtTime(285, now + .13);
    level.gain.setValueAtTime(0, now);
    level.gain.linearRampToValueAtTime(.031, now + .035);
    level.gain.exponentialRampToValueAtTime(.0001, now + .15);
    oscillator.connect(level).connect(this.volume);
    oscillator.onended = () => { oscillator.disconnect(); level.disconnect(); };
    oscillator.start();
    oscillator.stop(now + .16);
  }

  private fadeVoice() {
    if (!this.voice) return;
    const { source, level } = this.voice;
    const now = this.context.currentTime;
    level.gain.cancelScheduledValues(now);
    level.gain.setTargetAtTime(0, now, .032);
    source.stop(now + .17);
    this.voice = undefined;
  }

  stop() {
    if (this.closed) return;
    this.closed = true;
    this.request?.abort();
    this.fadeVoice();
    const context = this.context;
    this.volume.gain.setTargetAtTime(0, context.currentTime, .025);
    window.setTimeout(() => { void context.close().catch(() => {}); }, 180);
  }
}
