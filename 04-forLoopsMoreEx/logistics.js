function logistics(input) {
    let index = 0;
    let loadsCount = input[index];
    index++;
    let allLoads = 0;
    let busLoads = 0;
    let truckLoads = 0;
    let trainLoads = 0;
    for (let i = 0; i < loadsCount; i++) {
        let currentLoad = Number(input[index]);
        if (currentLoad <= 3) {
            busLoads += currentLoad;
        } else if (currentLoad <= 11) {
            truckLoads += currentLoad;
        } else {
            trainLoads += currentLoad;
        }
        allLoads +=currentLoad;
        index++;    
    }
    let totalPrice = 
    busLoads * 200 +
    truckLoads * 175 +
    trainLoads * 120;
    let averagePrice = totalPrice / allLoads;
    let busLoadsPercentage = busLoads / allLoads * 100;
    let truckLoadsPercentage = truckLoads / allLoads * 100;
    let trainLoadsPercentage = trainLoads / allLoads * 100;

    console.log(averagePrice.toFixed(2));
    console.log(`${busLoadsPercentage.toFixed(2)}%`);
    console.log(`${truckLoadsPercentage.toFixed(2)}%`);
    console.log(`${trainLoadsPercentage.toFixed(2)}%`);
}
logistics(["5","2","10","20","1","7"])