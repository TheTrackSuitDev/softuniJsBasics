function lunchBreak(input) {
    let series = (input[0]);
    let epDuration = Number(input[1]);
    let breakDuration = Number(input[2]);
    let lunchTime = breakDuration / 8;
    let breakTime = breakDuration / 4;
    let freeTime = breakDuration - lunchTime - breakTime;

    if (freeTime >= epDuration) {
      console.log(`You have enough time to watch ${series} and left with ${Math.ceil(freeTime - epDuration)} minutes free time.`);
    } else {
      console.log(`You don't have enough time to watch ${series}, you need ${Math.ceil(epDuration - freeTime)} more minutes.`);
    }
  }
  
  lunchBreak(["Teen Wolf","48","60"]);