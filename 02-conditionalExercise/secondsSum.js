function secondsSum(input) {
    let timeOne = Number(input[0]);
    let timeTwo = Number(input[1]);
    let timeThree = Number(input[2]);
    let finalTimeSec = timeOne + timeTwo + timeThree;
    let finalMin = Math.floor(finalTimeSec / 60);
    let finalSec = finalTimeSec - (finalMin * 60);
       
    if (finalSec > 9 ) {
        console.log(finalMin + ":" + finalSec);
    }   else {
        console.log(finalMin + ":0" + finalSec);
    }   
    }

  secondsSum (["14",
  "12",
  "10"])