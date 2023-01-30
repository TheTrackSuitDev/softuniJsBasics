function camp(input) {
    let season = input[0];
    let groupType = input[1];
    let studentsCount = Number(input[2]);
    let nights = Number(input[3]);

    let pricePerNight = 0;
    let sport = "";
    switch (season) {
        case "Winter":
            switch (groupType) {
                case "girls":
                    pricePerNight = 9.6;
                    sport = "Gymnastics"
                    break;
                case "boys":
                    pricePerNight = 9.6;
                    sport = "Judo"
                    break;
                default:
                    pricePerNight = 10;
                    sport = "Ski"
                    break;
            }
            break;
        case "Spring":
            switch (groupType) {
                case "girls":
                    pricePerNight = 7.2;
                    sport = "Athletics"
                    break;
                case "boys":
                    pricePerNight = 7.2;
                    sport = "Tennis"
                    break;
                default:
                    pricePerNight = 9.5;
                    sport = "Cycling"
                    break;
            }
            break;
        default:
            switch (groupType) {
                case "girls":
                    pricePerNight = 15;
                    sport = "Volleyball"
                    break;
                case "boys":
                    pricePerNight = 15;
                    sport = "Football"
                    break;
                default:
                    pricePerNight = 20;
                    sport = "Swimming"
                    break;
            }
            break;
    }

    let totalPrice = studentsCount * nights * pricePerNight;
    if (studentsCount >= 50) {
        totalPrice *= 0.5
    } else if (studentsCount >= 20){
        totalPrice *= 0.85;
    } else if (studentsCount >= 10){
        totalPrice *= 0.95;
    }


    console.log(`${sport} ${totalPrice.toFixed(2)} lv.`)
  
}

camp (["Spring","mixed","17","14"])