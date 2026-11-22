type Point = [number, number, number];

type Form = {
  turns: number;
  lobes: number;
  radius: number;
  excursion: number;
  rise: number;
  tube: number;
  flatten: number;
  twist: number;
  rotation: Point;
  rings: number;
};

const forms: Form[] = [
  { turns: 2, lobes: 3, radius: 1.08, excursion: .53, rise: .78, tube: .335, flatten: 1, twist: 0, rotation: [-.6, -.36, -.32], rings: 336 },
  { turns: 1, lobes: 2, radius: 1.21, excursion: .38, rise: .85, tube: .53, flatten: .48, twist: 1.5, rotation: [-.48, .85, .36], rings: 238 },
  { turns: 2, lobes: 5, radius: 1.14, excursion: .54, rise: .67, tube: .254, flatten: .83, twist: 2, rotation: [-.8, .12, -.65], rings: 395 },
  { turns: 1, lobes: 1, radius: 1.29, excursion: .17, rise: .38, tube: .62, flatten: .47, twist: 1.5, rotation: [-.74, .47, .44], rings: 205 },
];

export const sculptureMaterials = [
  { offset: 0, surface: '#34100b', edge: '#af2910' },
  { offset: .24, surface: '#5a160d', edge: '#ed3813' },
  { offset: .43, surface: '#831a09', edge: '#ff5227' },
  { offset: .68, surface: '#a7250b', edge: '#ff8450' },
  { offset: .86, surface: '#ce360f', edge: '#ffc08c' },
  { offset: 1, surface: '#93270b', edge: '#ff7642' },
];

const tau = 2 * Math.PI;
export const materialAngles = Array.from({ length: 24 }, (_, i) => {
  const angle = i * tau / 24;
  const dx = .5 * Math.cos(angle);
  const dy = .5 * Math.sin(angle);
  return { x1: .5 - dx, y1: .5 - dy, x2: .5 + dx, y2: .5 + dy };
});
const dot = (a: Point, b: Point) => a[0]*b[0] + a[1]*b[1] + a[2]*b[2];
const scale = (a: Point, k: number): Point => [a[0]*k, a[1]*k, a[2]*k];
const add = (a: Point, b: Point): Point => [a[0]+b[0], a[1]+b[1], a[2]+b[2]];
const cross = (a: Point, b: Point): Point => [
  a[1]*b[2] - a[2]*b[1], a[2]*b[0] - a[0]*b[2], a[0]*b[1] - a[1]*b[0],
];
const unit = (point: Point) => scale(point, 1 / Math.hypot(...point));
const light = unit([-.65, .65, .6]);

function camera([rx, ry, rz]: Point) {
  const cx = Math.cos(rx), sx = Math.sin(rx);
  const cy = Math.cos(ry), sy = Math.sin(ry);
  const cz = Math.cos(rz), sz = Math.sin(rz);
  return ([x, y, z]: Point): Point => {
    const y1 = cx*y - sx*z;
    const z1 = sx*y + cx*z;
    const x2 = cy*x + sy*z1;
    return [cz*x2 - sz*y1, sz*x2 + cz*y1, -sy*x + cy*z1];
  };
}

// Sample cross-sections once in model space. Every projected disk has a center
// and two perpendicular radius vectors, including the twist of the ribbon.
function makeModel(form: Form) {
  const pose = camera(form.rotation);
  return Array.from({ length: form.rings }, (_, i) => {
    const time = tau * i / form.rings;
    const a = form.turns * time;
    const b = form.lobes * time + .3;
    const radius = form.radius + form.excursion * Math.cos(b);
    const dr = -form.excursion * form.lobes * Math.sin(b);
    const center = pose([radius * Math.cos(a), radius * Math.sin(a), form.rise * Math.sin(b)]);
    const tangent = unit([
      dr*Math.cos(a) - radius*form.turns*Math.sin(a),
      dr*Math.sin(a) + radius*form.turns*Math.cos(a),
      form.rise*form.lobes*Math.cos(b),
    ]);
    const radial = unit(cross(tangent, [0, 0, 1]));
    const normal = cross(tangent, radial);
    const twist = form.twist * time;
    const u = pose(add(scale(radial, Math.cos(twist)), scale(normal, Math.sin(twist))));
    const v = pose(add(scale(radial, -Math.sin(twist)), scale(normal, Math.cos(twist))));
    return { center, u, v };
  });
}

const models = new Map<Form, ReturnType<typeof makeModel>>();

export function sculptureRings(index: number, yaw = 0, pitch = 0) {
  const form = forms[index] ?? forms[0]!;
  const model = models.get(form) ?? makeModel(form);
  models.set(form, model);
  const view = camera([pitch, yaw, 0]);

  let left = Infinity, right = -Infinity, bottom = Infinity, top = -Infinity;
  let far = Infinity, near = -Infinity;
  const rings = model.map(ring => {
    const center = view(ring.center);
    const u = view(ring.u);
    const v = view(ring.v);
    // Align the ellipse's local x axis with the light for a stationary highlight.
    const angle = Math.atan2(dot(v, light) / form.flatten, dot(u, light));
    const axisU = scale(u, form.tube);
    const axisV = scale(v, form.tube * form.flatten);
    const side = add(scale(axisU, Math.cos(angle)), scale(axisV, Math.sin(angle)));
    const up = add(scale(axisU, -Math.sin(angle)), scale(axisV, Math.cos(angle)));
    const dx = Math.hypot(side[0], up[0]);
    const dy = Math.hypot(side[1], up[1]);
    left = Math.min(left, center[0] - dx);
    right = Math.max(right, center[0] + dx);
    bottom = Math.min(bottom, center[1] - dy);
    top = Math.max(top, center[1] + dy);
    far = Math.min(far, center[2]);
    near = Math.max(near, center[2]);
    return { center, side, up };
  });

  const zoom = Math.min(700 / (right - left), 506 / (top - bottom));
  const centerX = (left + right) / 2;
  const centerY = (bottom + top) / 2;

  // Paint from back to front so each ridge hides the far side of the knot.
  return rings.sort((a, b) => a.center[2] - b.center[2]).map(({ center, side, up }) => {
    // Convert the projected basis into native ellipse geometry. Keeping all
    // scale out of the SVG transform also keeps its paint bounds finite at
    // grazing angles where the projected 3D disk becomes a line.
    const ax = side[0], ay = -side[1];
    const bx = up[0], by = -up[1];
    const xx = ax*ax + bx*bx, yy = ay*ay + by*by, xy = ax*ay + bx*by;
    const rotation = .5 * Math.atan2(2*xy, xx-yy);
    const major = Math.sqrt(.5 * (xx + yy + Math.hypot(xx-yy, 2*xy)));
    const minor = Math.abs(ax*by - ay*bx) / major;
    const cos = Math.cos(rotation), sin = Math.sin(rotation);
    const highlight = Math.atan2((-ax*sin + ay*cos) / Math.max(minor, .00001), (ax*cos + ay*sin) / major);
    const shade = Math.round(highlight * materialAngles.length / tau + materialAngles.length) % materialAngles.length;
    const depth = (center[2] - far) / (near - far);
    const x = 360 + (center[0] - centerX) * zoom;
    const y = 260 - (center[1] - centerY) * zoom;
    return {
      transform: 'translate(' + x.toFixed(2) + ' ' + y.toFixed(2) + ') rotate(' + (rotation*360/tau).toFixed(2) + ')',
      rx: (major*zoom).toFixed(2),
      ry: Math.max(.45, minor*zoom).toFixed(2),
      shade,
      width: (.95 + depth*.92).toFixed(2),
      intensity: (.81 + depth*.19).toFixed(2),
    };
  });
}
