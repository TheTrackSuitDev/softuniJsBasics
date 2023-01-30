function cleverLily(input) {
    let lilyAge = Number(input[0]);
    let washMachPrice = Number(input[1]);
    let toyPrice = Number(input[2]);
    let moneyBdays = 0;
    let toyBdays = 0;
    for (let i = 1; i <= lilyAge; i++) {
        if (i % 2 === 0) {
            moneyBdays++;
        } else {
            toyBdays++;
        }
    }
    let bDayMoney = 0;
    for (let i = 1; i <= moneyBdays; i++) {
        bDayMoney += i * 10 - 1; 
    }
    let toyMoney = toyBdays * toyPrice;
    let totalMoney = bDayMoney + toyMoney;
    if (totalMoney >= washMachPrice) {
        console.log(`Yes! ${(totalMoney - washMachPrice).toFixed(2)}`);
    } else {
        console.log(`No! ${(washMachPrice - totalMoney).toFixed(2)}`);
    }
}
cleverLily(["21",
"1570.98",
"3"])