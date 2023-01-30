function matchTickets(input) {
    let budget = Number(input[0]);
    let ticketType = input[1];
    let fansCount = Number(input[2]);
    
    if (fansCount < 5) {
        budget *= 0.25;
    } else if (fansCount < 10){
        budget *= 0.4;
    } else if (fansCount < 25){
        budget *= 0.5;
    } else if (fansCount < 50){
        budget *= 0.6;
    } else {
        budget *= 0.75;
    }
    
    let ticketsPrice = 0;
    switch (ticketType) {
        case "VIP":
            ticketsPrice = 499.99 * fansCount;
            break;
        default:
            ticketsPrice = 249.99 * fansCount;
            break;
    }

    if (ticketsPrice <= budget) {
        console.log(`Yes! You have ${(budget - ticketsPrice).toFixed(2)} leva left.`);
    } else {
        console.log(`Not enough money! You need ${(ticketsPrice - budget).toFixed(2)} leva.`);
    }

}

matchTickets (["30000","VIP","49"])