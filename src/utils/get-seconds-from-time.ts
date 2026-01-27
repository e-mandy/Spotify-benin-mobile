export function getSeconds(duration: string) {
  let [minutes, secondes] = duration.split(":");
  return (parseInt(minutes) || 0) * 60 + (parseInt(secondes) || 0);
}
