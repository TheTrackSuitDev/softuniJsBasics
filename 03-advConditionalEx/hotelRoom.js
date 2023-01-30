function hotelRoom(input) {
    let month = input[0];
    let nights = Number(input[1]);
    let apPrice = 0;
    let stPrice = 0;
    switch (month) {
        case "May":
        case "October":
            stPrice = nights * 50;
            apPrice = nights * 65;
            if (nights > 7 && nights <= 14) {
               stPrice *= 0.95;
            } else if (nights > 14){
               stPrice *= 0.7; 
            }
            break;
        case "June":
        case "September":
            stPrice = nights * 75.20;
            apPrice = nights * 68.70;
            if (nights > 14) {
                stPrice *= 0.8;
            }
            break;
        default:
            stPrice = nights * 76;
            apPrice = nights * 77;
            break;
    }
    
    if (nights > 14) {
        apPrice *= 0.9;
    }

    console.log(`Apartment: ${apPrice.toFixed(2)} lv.`);
    console.log(`Studio: ${stPrice.toFixed(2)} lv.`);
}

hotelRoom(["August",
"20"])