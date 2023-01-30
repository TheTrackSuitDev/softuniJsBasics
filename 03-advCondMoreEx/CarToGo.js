function cars(input) {
    let budget = Number(input[0]);
    let season = input[1];
      
    let carClass = "";
    let carType = "";
    let carPrice = 0;
    if (budget <= 100) {
        carClass = "Economy class"
        switch (season) {
            case "Summer":
                carType = "Cabrio";
                carPrice = budget * 0.35;
                break;
            default:
                carType = "Jeep";
                carPrice = budget * 0.65;
                break;
        }
    } else if (budget <= 500){
        carClass = "Compact class";
        switch (season) {
            case "Summer":
                carType = "Cabrio";
                carPrice = budget * 0.45;
                break;
            default:
                carType = "Jeep";
                carPrice = budget * 0.8;
                break;
        }
    } else {
        carClass = "Luxury class";
        carType = "Jeep";
        carPrice = budget * 0.9;
    }

    console.log(carClass);
    console.log(`${carType} - ${carPrice.toFixed(2)}`)
  
}

cars (["1010","Summer"])