function vacation(input) {
    let budget = Number(input[0]);
    let season = input[1];
      
    let stayType = "";
    let location = "";
    let stayPrice = 0;
    if (budget <= 1000) {
        stayType = "Camp"
        switch (season) {
            case "Summer":
                location = "Alaska";
                stayPrice = budget * 0.65;
                break;
            default:
                location = "Morocco";
                stayPrice = budget * 0.45;
                break;
        }
    } else if (budget <= 3000){
        stayType = "Hut"
        switch (season) {
            case "Summer":
                location = "Alaska";
                stayPrice = budget * 0.8;
                break;
            default:
                location = "Morocco";
                stayPrice = budget * 0.6;
                break;
        }
    } else {
        stayType = "Hotel";
        stayPrice = budget * 0.9;
        switch (season) {
            case "Summer":
                location = "Alaska";
                break;
            default:
                location = "Morocco";
                break;
        }
    }

    console.log(`${location} - ${stayType} - ${stayPrice.toFixed(2)}`)
  
}

vacation (["2543.99","Winter"])