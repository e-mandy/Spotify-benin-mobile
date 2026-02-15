export const getYear = (datetime) => {
  if (!datetime) return null;

  const date = new Date(datetime);

  const year = !isNaN(date.getTime()) ? date.getFullYear().toString() : null;
  return year;
};
