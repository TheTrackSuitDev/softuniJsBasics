function depositReturn(input) {
    let depAmount = Number(input[0]);
    let depDuration = Number(input[1]);
    let apy = Number(input[2]);
    let returnValue = depAmount + (depDuration * ((depAmount * apy / 12 / 100)));
    console.log(returnValue);
  }
  
  depositReturn(["2350",
  "6",
  "7"]);