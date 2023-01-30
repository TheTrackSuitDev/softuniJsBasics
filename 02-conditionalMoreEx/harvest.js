function harvest(input) {
    let vineArea = Number(input[0]);
    let kgGrapePerM = Number(input[1]);
    let wineLtrReq = Number(input[2]);
    let workersCount = Number(input[3]);
    let allHarvest = vineArea * kgGrapePerM;
    let wineHarvest = allHarvest * 0.4;
    let wineMade = wineHarvest / 2.5;
       
    if (wineMade < wineLtrReq) {
        console.log(`It will be a tough winter! More ${Math.floor(wineLtrReq - wineMade)} liters wine needed.`);
    } else {
        console.log(`Good harvest this year! Total wine: ${Math.floor(wineMade)} liters.`);
        console.log(`${Math.ceil(wineMade - wineLtrReq)} liters left -> ${Math.ceil((wineMade - wineLtrReq) / workersCount)} liters per person.`);
    }
}

harvest(["1020","1.5","425","4"])