export function convertDateToString(date: string): string {
  const dateValue = new Date(date);

  const options = {
    year: "numeric",
    month: "long",
    day: "numeric",
  } as const;
  return dateValue.toLocaleDateString("fr-FR", options);
}
