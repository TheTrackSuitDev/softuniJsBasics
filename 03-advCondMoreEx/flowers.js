function flowers(input) {
    let chrysaCount = Number(input[0]);
    let roseCount = Number(input[1]);
    let tulipCount = Number(input[2]);
    let season = input[3];
    let holiday = input[4];
    
    let totalPrice = 0;
    switch (season) {
        case "Spring":
        case "Summer":
            totalPrice = chrysaCount * 2 + roseCount * 4.1 + tulipCount * 2.5;
            break;
        default:
            totalPrice = chrysaCount * 3.75 + roseCount * 4.5 + tulipCount * 4.15;
            break;
    }

    if (holiday === "Y") {
        totalPrice *= 1.15;
    }
    
    if (tulipCount > 7 && season === "Spring") {
        totalPrice *= 0.95;
    } 
    if (roseCount >= 10 && season === "Winter") {
        totalPrice *= 0.9
    }
    if (chrysaCount + roseCount + tulipCount > 20) {
        totalPrice *= 0.8;
    }

    console.log((totalPrice + 2).toFixed(2));

}

flowers (["10","10","10","Autumn","N"])