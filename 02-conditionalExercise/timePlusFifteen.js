function timePlusFifteen(input) {
  let currTimeH = Number(input[0]);
  let currTimeM = Number(input[1]);
  let currTimeOnlyM = currTimeH * 60 + currTimeM;
  let futureTimeOnlyM = currTimeOnlyM + 15;
  let futureTimeM = futureTimeOnlyM % 60;
  let futureTimeH = Math.floor(futureTimeOnlyM / 60);

  if (futureTimeH === 24) {
    futureTimeH = 0;
  }

  if (futureTimeM > 9) {
    console.log(futureTimeH + ":" + futureTimeM);
  } else {
    console.log(futureTimeH + ":0" + futureTimeM);
  }
}

timePlusFifteen(["12", "49"]);
