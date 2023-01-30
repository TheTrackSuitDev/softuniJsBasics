function tennis(input) {
    let tournCount = Number(input[0]);
    let startPoints = Number(input[1]);
    let winsCount = 0;
    let tournPoints = 0;
    for (let i = 2; i <= tournCount + 2; i++) {
        let tournOutcome = (input[i]);
        switch (tournOutcome) {
            case "W":
                tournPoints += 2000;
                winsCount++
                break;
            case "F":
                tournPoints += 1200;
                break;
            case "SF":
                tournPoints += 720;
                break;
        }
    }
    let totalPoints = startPoints + tournPoints;
    let avPoints = tournPoints / tournCount;
    let winPerc = winsCount / tournCount * 100;

    console.log(`Final points: ${totalPoints}`);
    console.log(`Average points: ${Math.floor(avPoints)}`);
    console.log(`${winPerc.toFixed(2)}%`);
}
tennis(["7",
"1200",
"SF",
"F",
"W",
"F",
"W",
"SF",
"W"])