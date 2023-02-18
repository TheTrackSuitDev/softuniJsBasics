function easterContest(input) {
    let index = 0;
    let cakesCount = Number(input[index]);
    index++;
    let currLeader = "";
    let currMaxPoints = 0;
    for (let currCake = 0; currCake < cakesCount; currCake++) {
        let currChef = input[index];
        index++;
        let nextCommand = input[index];
        index++;
        let currTotal = 0;
        while (nextCommand !== "Stop") {
          let currPoints = Number(nextCommand);
          currTotal += currPoints;
          if (currTotal > currMaxPoints) {
            currMaxPoints = currTotal;
            currLeader = currChef;
          }
          nextCommand = input[index];
          index++;
        }
        console.log(`${currChef} has ${currTotal} points.`);
        if (currChef === currLeader) {
            console.log(`${currChef} is the new number 1!`);
        }
    }
    console.log(`${currLeader} won competition with ${currMaxPoints} points!`);
}
easterContest(["2",
"Chef Angelov",
"9",
"9",
"9",
"Stop",
"Chef Rowe",
"10",
"10",
"10",
"10",
"Stop"])