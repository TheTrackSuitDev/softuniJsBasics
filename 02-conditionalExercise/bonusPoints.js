function bonusPoints(input) {
    let startPoints = Number(input[0]);
    let bPointsOne = 0;
    if (startPoints <= 100) {
        bPointsOne = 5;
    } else if (startPoints > 100 && startPoints <= 1000) {
        bPointsOne = startPoints * 0.2;
    } else {
        bPointsOne = startPoints * 0.1;
    }

    let bPointsTwo = 0;
    if (startPoints % 2 === 0) {
        bPointsTwo = 1;
    } else if (startPoints % 5 === 0){
        bPointsTwo = 2;
    }

        console.log(bPointsOne + bPointsTwo);
        console.log(bPointsOne + bPointsTwo + startPoints);
    }

bonusPoints(["15875"])