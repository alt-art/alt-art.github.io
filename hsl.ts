export function hsv_to_rgb(h: number, s: number, v: number): string {
  const c = v * s;
  const x = c * (1 - Math.abs(((h / 60) % 2) - 1));
  const m = v - c;
  let r, g, b;
  if (h < 60) {
    r = c;
    g = x;
    b = 0;
  } else if (h < 120) {
    r = x;
    g = c;
    b = 0;
  } else if (h < 180) {
    r = 0;
    g = c;
    b = x;
  } else if (h < 240) {
    r = 0;
    g = x;
    b = c;
  } else if (h < 300) {
    r = x;
    g = 0;
    b = c;
  } else {
    r = c;
    g = 0;
    b = x;
  }
  r = Math.round((r + m) * 255)
    .toString(16)
    .padStart(2, '0');
  g = Math.round((g + m) * 255)
    .toString(16)
    .padStart(2, '0');
  b = Math.round((b + m) * 255)
    .toString(16)
    .padStart(2, '0');
  return '#' + r + g + b;
}
