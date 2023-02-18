function club(input) {
    let index = 0;
    let targetProfit = Number(input[index]);
    index++
    let nextCommand = input[index];
    index++;
    let currProfit = 0;
    while (nextCommand !== "Party!") {
        let currDrink = nextCommand;
        let drinkCount = Number(input[index]);
        index++;
        let profit = Number(currDrink.length) * drinkCount;
        if (profit % 2 !== 0) {
            profit *= 0.75;
        }
        currProfit += profit;
        if (currProfit >= targetProfit) {
            break;
        }
        nextCommand = input[index];
        index++;
    }
    if (currProfit >= targetProfit) {
        console.log(`Target acquired.`);
    } else {
        console.log(`We need ${(targetProfit - currProfit).toFixed(2)} leva more.`);
    }
    console.log(`Club income - ${currProfit.toFixed(2)} leva.`);
}
club(["100",
"Sidecar",
"7",
"Mojito",
"5",
"White Russian",
"10"])