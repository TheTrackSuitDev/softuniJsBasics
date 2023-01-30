function ski(input) {
    let stayDays = Number(input[0]);
    let stayNights = stayDays - 1;
    let roomType = input[1];
    let rating = input[2];
    let stayPrice = 0
    switch (roomType) {
        case "room for one person":
            stayPrice = stayNights * 18.00
            break;
        case "apartment":
            stayPrice = stayNights * 25.00;
            if (stayDays < 10) {
               stayPrice *= 0.70;
            } else if (stayDays >= 10 && stayDays <= 15){
               stayPrice *= 0.65; 
            } else {
               stayPrice *= 0.5; 
            }
            break;
        default:
            stayPrice = stayNights * 35.00;
            if (stayDays < 10) {
                stayPrice *= 0.90;
             } else if (stayDays >= 10 && stayDays <= 15){
                stayPrice *= 0.85; 
             } else {
                stayPrice *= 0.8; 
             }
            break; 
    }
    
    if (rating === "positive") {
        stayPrice *= 1.25;
    }   else {
        stayPrice *= 0.9;
    }

    console.log(stayPrice.toFixed(2));
}

ski(["2",
"apartment",
"positive"])