export function countRecordDuration(time) {
  const hour = Math.floor(time / 3600);
  const minute = Math.floor(time / 60) % 60;
  const seconde = time % 60;

  const hourToString = hour.toString().padStart(2, "0");
  const minuteToString = minute.toString().padStart(2, "0");
  const secondeToString = seconde.toString().padStart(2, "0");

  if (hourToString === "00") {
    return `${minuteToString} : ${secondeToString}`;
  } else {
    return `${hourToString}${minuteToString}:${secondeToString} `;
  }
}
