function truckDriver(input) {
    let season = input[0];
    let distance = Number(input[1]);
    
    let payPerKm = 0;
    if ((distance <= 5000) && (season === "Spring" || season === "Autumn")) {
        payPerKm = 0.75;
    } else if (distance <= 5000 && season === "Summer") {
        payPerKm = 0.9;
    } else if (distance <= 5000 && season === "Winter") {
        payPerKm = 1.05;
    } else if ((distance <= 10000) && (season === "Spring" || season === "Autumn")) {
        payPerKm = 0.95;
    } else if (distance <= 10000 && season === "Summer") {
        payPerKm = 1.1;
    } else if (distance <= 10000 && season === "Winter") {
        payPerKm = 1.25;
    } else {
        payPerKm = 1.45;
    }
 
    console.log(((distance * payPerKm * 4) * 0.9).toFixed(2));
  
}

truckDriver (["Autumn","8600"])