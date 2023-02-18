function tourAgency(input) {
    let city = input[0];
    let package = input[1];
    let vip = input[2];
    let days = Number(input[3]);
    let pricePerDay = 0;
    let dayIsValid = true;
    let textIsValid = true;
        switch (city) {
            case "Bansko":
            case "Borovets":
                switch (package) {
                    case "withEquipment":
                        pricePerDay = 100;
                        switch (vip) {
                            case "yes":
                                pricePerDay *= 0.9;
                                break;
                            default:
                                break;
                        }
                        break;
                    case "noEquipment":
                        pricePerDay = 80;
                        switch (vip) {
                            case "yes":
                                pricePerDay *= 0.95;
                                break;
                            default:
                                break;
                        }
                        break;
                    default:
                        textIsValid = false;
                        break;
                }
                break;
            case "Varna":
            case "Burgas":
                switch (package) {
                    case "withBreakfast":
                        pricePerDay = 130;
                        switch (vip) {
                            case "yes":
                                pricePerDay *= 0.88;
                                break;
                            default:
                                break;
                        }
                        break;
                    case "noBreakfast":
                        pricePerDay = 100;
                        switch (vip) {
                            case "yes":
                                pricePerDay *= 0.93;
                                break;
                            default:
                                break;
                        }
                        break
                    default:
                        textIsValid = false;
                        break;
                }
                break;
            default:
                textIsValid = false;
                break;
        }
        if (days < 1) {
            dayIsValid = false;
        }
        if (days > 7) {
            days--;
        }
        if (!dayIsValid) {
            console.log(`Days must be positive number!`);
        } else if (!textIsValid){
            console.log(`Invalid input!`);
        } else {
            let totalPrice = pricePerDay * days;
            console.log(`The price is ${totalPrice.toFixed(2)}lv! Have a nice time!`);
        }
}
tourAgency(["Gabrovo",
"noBreakfast",
"no",
"3"])