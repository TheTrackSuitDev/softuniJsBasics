function coins(input) {
    let change = Number(input[0])
    let changeInDimes = Math.round(change * 100);
    let coinsUsed = 0;
    
    while (changeInDimes !== 0) {
        if (changeInDimes >= 200) {
            coinsUsed += Math.trunc(changeInDimes / 200);
            changeInDimes = changeInDimes % 200;
        } else if (changeInDimes >= 100){
            coinsUsed += Math.trunc(changeInDimes / 100);
            changeInDimes = changeInDimes % 100;
        } else if (changeInDimes >= 50){
            coinsUsed += Math.trunc(changeInDimes / 50);
            changeInDimes = changeInDimes % 50;
        } else if (changeInDimes >= 20){
            coinsUsed += Math.trunc(changeInDimes / 20);
            changeInDimes = changeInDimes % 20;
        } else if (changeInDimes >= 10){
            coinsUsed += Math.trunc(changeInDimes / 10);
            changeInDimes = changeInDimes % 10;
        } else if (changeInDimes >= 5){
            coinsUsed += Math.trunc(changeInDimes / 5);
            changeInDimes = changeInDimes % 5;
        } else if (changeInDimes >= 2){
            coinsUsed += Math.trunc(changeInDimes / 2);
            changeInDimes = changeInDimes % 2;
        } else if (changeInDimes >= 1){
            coinsUsed += Math.trunc(changeInDimes / 1);
            changeInDimes = changeInDimes % 1;
        }
    }
    console.log(coinsUsed);  
}
coins(["2.73"]) 