function fuel(input) {
    let fuelType = (input[0]);
    let fuelLeft = Number(input[1]);

    if (fuelType != "Diesel" && fuelType != "Gasoline" && fuelType != "Gas") {
        console.log("Invalid fuel!");
    }
        else if (fuelLeft < 25) {
            console.log(`Fill your tank with ${fuelType.toLowerCase()}!`);
        }
        else {
            console.log(`You have enough ${fuelType.toLowerCase()}.`);
        }
}

fuel(["Gas","25"])