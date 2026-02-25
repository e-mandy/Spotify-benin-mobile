export function truncate(text: string, maxLength: number): string {
  if (!text) return "--";
  text = text.replace("\n", " ");
  return text.length <= maxLength ? text : text.slice(0, maxLength - 3) + "...";
}
