// uppper case the first character each word
export default function upperCaseFirstChar(s: string): string {
  return s
    ? s
        .split(' ')
        .map((w) => w.charAt(0).toLocaleUpperCase() + w.substring(1).toLocaleLowerCase())
        .join(' ')
    : s;
}
