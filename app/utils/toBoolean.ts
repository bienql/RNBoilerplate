export default function toBoolean(str: string | null | undefined): boolean | null | undefined {
  if (str !== null && str !== undefined) {
    if (str === 'true') return true;
    if (str === 'false') return false;
    return undefined;
  }

  return str;
}
