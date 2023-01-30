function zillaVsKong(input) {
    let avBudget = Number(input[0]);
    let statHired = Number(input[1]);
    let pricePerStat = Number(input[2]);
    let decorPrice = avBudget * 0.1;
    let statPrice = statHired * pricePerStat;
    if (statHired > 150) {
        statPrice = statPrice * 0.9
    } 
    let budgetNeeded = decorPrice + statPrice    

    if (avBudget >= budgetNeeded) {
      console.log("Action!");
      console.log(`Wingard starts filming with ${(avBudget - budgetNeeded).toFixed(2)} leva left.`);
    } else {
      console.log("Not enough money!");
      console.log(`Wingard needs ${(budgetNeeded - avBudget).toFixed(2)} leva more.`);
    }
  }
  
  zillaVsKong(["9587.88","222","55.68"]);
  