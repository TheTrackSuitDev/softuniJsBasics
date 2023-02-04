function backToPast(input) {
    let inheritedMoney = Number(input[0]);
    let endYear = Number(input[1]);
    let moneyNeeded = 0;
    for (let i = 0; i <= endYear - 1800; i++) {
        if (i % 2 === 0) {
            moneyNeeded += 12000;
        } else {
            moneyNeeded += 12000 + (50 * (18 + i));
        }
    }
    if (moneyNeeded <= inheritedMoney) {
        console.log(`Yes! He will live a carefree life and will have ${(inheritedMoney - moneyNeeded).toFixed(2)} dollars left.`);
    } else {
        console.log(`He will need ${(moneyNeeded - inheritedMoney).toFixed(2)} dollars to survive.`);
    }
}
backToPast(["100000.15","1808"])