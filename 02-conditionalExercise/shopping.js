function shopping(input) {
    let budget = Number(input[0]);
    let gpuAmount = Number(input[1]);
    let cpuAmount = Number(input[2]);
    let ramAmount = Number(input[3]);
    let gpuPrice = 250;
    let cpuPrice = gpuAmount * gpuPrice * 0.35;
    let ramPrice = gpuAmount * gpuPrice * 0.1;
    let checkout = (gpuPrice * gpuAmount) + 
    (cpuPrice * cpuAmount) + 
    (ramPrice * ramAmount);

    if (gpuAmount > cpuAmount) {
        checkout = checkout * 0.85;
    }

    if (budget >= checkout) {
      console.log(`You have ${(budget - checkout).toFixed(2)} leva left!`);
    } else {
      console.log(`Not enough money! You need ${(checkout - budget).toFixed(2)} leva more!`);
    }
  }
  
  shopping(["920.45","3","1","1"]);