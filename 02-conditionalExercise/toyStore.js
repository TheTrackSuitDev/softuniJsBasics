function toyStore(input) {
    let vacationPrice = Number(input[0]);
    let puzzleAmount = Number(input[1]);
    let puzzlePrice = 2.60;
    let puppetAmount = Number(input[2]);
    let puppetPrice = 3;
    let teddyAmount = Number(input[3]);
    let teddyPrice = 4.10;
    let minionAmount = Number(input[4]);
    let minionPrice = 8.20;
    let lorryAmount = Number(input[5]);
    let lorryPrice = 2;
    let totalPrice = (puzzleAmount * puzzlePrice) + 
    (puppetAmount * puppetPrice) +
    (teddyAmount * teddyPrice) + 
    (minionAmount * minionPrice) +
    (lorryAmount * lorryPrice);
    
    let totalAmount = puzzleAmount + 
    puppetAmount + 
    teddyAmount + 
    minionAmount + 
    lorryAmount;

    if (totalAmount >= 50) {
      totalPrice = totalPrice * 0.75;
    }
  
    let moneyLeft = totalPrice * 0.9;

    if (moneyLeft >= vacationPrice) {
      console.log(`Yes! ${(moneyLeft - vacationPrice).toFixed(2)} lv left.`);
    } else {
      console.log(`Not enough money! ${(vacationPrice - moneyLeft).toFixed(2)} lv needed.`);
    }
  }
  
  toyStore(["320","8","2","5","5","1"]);
  