function bikeRace(input) {
    let juniorsCount = Number(input[0]);
    let seniorsCount = Number(input[1]);
    let trackType = input[2];
    
    let allIncome = 0;
    switch (trackType) {
        case "trail":
            allIncome = (juniorsCount * 5.5) + (seniorsCount * 7);
            break;
        case "cross-country":
            allIncome = (juniorsCount * 8) + (seniorsCount * 9.5);
            break;
        case "downhill":
            allIncome = (juniorsCount * 12.25) + (seniorsCount * 13.75);
            break;
        default:
            allIncome = (juniorsCount * 20) + (seniorsCount * 21.50);
            break;
    }
    
    if (trackType === "cross-country" && seniorsCount + juniorsCount >= 50) {
        allIncome *= 0.75;
    } 
    
    allIncome *= 0.95;
    console.log(allIncome.toFixed(2));
}

bikeRace (["21","26","cross-country"])