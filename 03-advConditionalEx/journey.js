function journey(input) {
    let budget = Number(input[0]);
    let season = input[1];
    let destination = "";
    let stayType = "";
    let price = 0;

    if (budget <= 100) {
        destination = "Bulgaria";
    } else if (budget <= 1000) {
        destination = "Balkans";
    } else {
        destination = "Europe";
    }

    if (season === "summer" && destination != "Europe") {
        stayType = "Camp";
    }  else {
        stayType = "Hotel";
    }

    switch (destination) {
        case "Bulgaria":
            if (season === "summer") {
                price = budget * 0.3;
            }  else {
               price = budget * 0.7;
            }
            break;
        case "Balkans":
            if (season === "summer") {
                price = budget * 0.4;
            }  else {
               price = budget * 0.8;
            }
            break;
        default:
            price = budget * 0.9;
            break;
    }

    console.log(`Somewhere in ${destination}`);
    console.log(`${stayType} - ${price.toFixed(2)}`);
}

journey(["1500", "summer"])