export function truncate(text: string, maxLength: number): string {
  text = text.replace("\n", " ");
  return text.length <= maxLength ? text : text.slice(0, maxLength - 3) + "...";
}
