function fishingBoat(input) {
    let budget = Number(input[0]);
    let season = input[1];
    let participants = Number(input[2]);
    let boatPrice = 0;

    switch (season) {
        case "Spring":
            boatPrice = 3000;
            break;
        case "Winter":
            boatPrice = 2600;
            break;
        default:
           boatPrice = 4200;
            break;
    }

    if (participants <= 6) {
        boatPrice *= 0.9;
    } else if (participants > 6 && participants < 12) {
        boatPrice *= 0.85;
    } else {
        boatPrice *= 0.75;
    }
    
    if (participants % 2 === 0 && season != "Autumn") {
        boatPrice *= 0.95;
    }
    
    if (boatPrice <= budget) {
        console.log(`Yes! You have ${(budget - boatPrice).toFixed(2)} leva left.`);
    } else {
        console.log(`Not enough money! You need ${(boatPrice - budget).toFixed(2)} leva.`);
    }   
}

fishingBoat(["2000",
"Winter",
"13"])