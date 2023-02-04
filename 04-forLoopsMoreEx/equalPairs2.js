function equalPairs(input) {
  let index = 0;
  index++;
  let pairsCount = Number(input[0]);
  let maxDiff = 0;
  let value = Number(input[1]) + Number(input[2]);
  let areEqual = true;
  for (let i = 0; i < pairsCount; i++) {
    let currentNumOne = Number(input[index]);
    index++;
    let currentNumTwo = Number(input[index]);
    index++;
    let currentValue = currentNumOne + currentNumTwo;
    if (currentValue != value) {
      areEqual = false;
      let currentDiff = Math.abs(currentValue - value);
      if (currentDiff > maxDiff) {
        maxDiff = currentDiff;
      }
    value = currentValue;
    }
  }
  if (areEqual == true) {
    console.log(`Yes, value=${value}`);
  } else {
    console.log(`No, maxdiff=${maxDiff}`);
  }
}
equalPairs(["4", "1", "1","3","1","2","2","0","0"]);
