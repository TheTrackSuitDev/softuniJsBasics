function readHoursPerDay(input) {
  let pagesCurrBook = Number(input[0]);
  let readSpeedPerHour = Number(input[1]);
  let daysToRead = Number(input[2]);
  let reqHoursPerDay = pagesCurrBook / readSpeedPerHour / daysToRead;
  console.log(reqHoursPerDay);
}

readHoursPerDay(["432",
"15",
"4"]);