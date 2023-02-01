function oscars(input) {
    let actorName = input[0];
    let academyPionts = Number(input[1]);
    let juryCount = Number(input[2]);
    let totalPoints = academyPionts;
    let index = 3;
    for (let i = 0; i < juryCount; i++) {
        let juryName = input[index];
        let juryMemNameCount = juryName.length;
        let currMemPoints = Number(input[index + 1]);
        totalPoints += juryMemNameCount * currMemPoints / 2;
        index += 2;
        if (totalPoints > 1250.5) {
            break;
        }
    }  
    if (totalPoints > 1250.5) {
      console.log(`Congratulations, ${actorName} got a nominee for leading role with ${totalPoints.toFixed(1)}!`);
    } else {
      console.log(`Sorry, ${actorName} you need ${(1250.5 - totalPoints).toFixed(1)} more!`);
    }
  }
  
oscars(["Sandra Bullock",
"340",
"5",
"Robert De Niro",
"50",
"Julia Roberts",
"40.5",
"Daniel Day-Lewis",
"39.4",
"Nicolas Cage",
"29.9",
"Stoyanka Mutafova",
"33"])