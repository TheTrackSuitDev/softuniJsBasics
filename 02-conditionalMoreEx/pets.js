function pets(input) {
    let daysAway = Number(input[0]);
    let foodLeft = Number(input[1]);
    let dogFoodPerDay = Number(input[2]);
    let catFoodPerDay = Number(input[3]);
    let turtleFoodPerDay = Number(input[4] / 1000);
    let totalFoodPerDay = dogFoodPerDay + catFoodPerDay + turtleFoodPerDay;
    let foodNeeded = totalFoodPerDay * daysAway;

    if (foodNeeded <= foodLeft) {
        console.log(`${Math.floor(foodLeft - foodNeeded)} kilos of food left.`);
    } else {
        console.log(`${Math.ceil(foodNeeded - foodLeft)} more kilos of food are needed.`);
    }
}

pets(["5","10","2.1","0.8","321"])