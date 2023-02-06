function vacation(input) {
    let index = 0;
    let moneyNeeded = Number(input[index]);
    index++;
    let currMoney = Number(input[index]);
    index++;
    let currOperation = input[index];
    index++;
    let currAmount = Number(input[index]);
    index++;
    let daysPast = 0;
    let consSpend = 0;
    while (currMoney < moneyNeeded) {
        if (consSpend === 5) {
            break;
        }
        switch (currOperation) {
            case "spend":
                currMoney -= currAmount;
                if (currMoney < 0) {
                    currMoney = 0;
                }
                consSpend++;
                break;
            default:
                currMoney += currAmount;
                consSpend = 0;
                break;
        }
        daysPast++;
        currOperation = input[index];
        index++;
        currAmount = Number(input[index]);
        index++;
    }
    if (consSpend === 5) {
        console.log(`You can't save the money.`);
        console.log(`${daysPast}`);
    } else {
        console.log(`You saved the money for ${daysPast} days.`);
    }   
}
vacation(["250",
"150",
"spend",
"50",
"spend",
"50",
"save",
"100",
"save",
"100"])