function basketball(input) {
    let trainingCost = Number(input[0]);
    let bootsCost = trainingCost * 0.6;
    let kitCost = bootsCost * 0.8;
    let ballCost = kitCost * 0.25;
    let accsCost = ballCost * 0.2
      
    console.log(trainingCost + bootsCost + kitCost + ballCost + accsCost);
  }
  
  basketball(["550"]);