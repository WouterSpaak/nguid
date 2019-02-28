export function guid(seed?: any): string {
  return seed
    ? (seed ^ Math.random() * 16 >> seed / 4).toString(16)
    : (<any>[1e7] + -1e3 + -4e3 + -8e3 + -1e11).replace(/[018]/g, guid);
}
