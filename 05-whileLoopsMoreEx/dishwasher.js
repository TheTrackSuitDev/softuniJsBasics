function washingMachine(input) {
    let index = 0;
    let detergentBottles = Number(input[index]);
    index++;
    let detergentInMl = detergentBottles * 750;
    let command = input[index];
    let dishesCleaned = 0;
    let potsCleaned = 0;
    while (command != "End") {
        command = Number(command);
        if (detergentInMl < 0) {
            console.log(`Not enough detergent, ${Math.abs(detergentInMl)} ml. more necessary!`);
            break;
        }
        if (index % 3 === 0) {
            detergentInMl -= command * 15;
            potsCleaned += command;
        } else {
            detergentInMl -= command * 5;
            dishesCleaned += command;
        }
        index++;
        command = input[index];
    }
    if (detergentInMl >= 0) {
        console.log("Detergent was enough!");
        console.log(`${dishesCleaned} dishes and ${potsCleaned} pots were washed.`);
        console.log(`Leftover detergent ${detergentInMl} ml.`);
    }
}
washingMachine(["1","10","15","10","12","13","30"])