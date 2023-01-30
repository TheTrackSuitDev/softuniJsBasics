function delivery(input) {
    let chickenCost = Number(input[0]) * 10.35;
    let fishCost = Number(input[1]) * 12.40;
    let veggieCost = Number(input[2]) * 8.15;
    let dessertCost = (chickenCost + fishCost + veggieCost) * 0.2
      
    console.log(chickenCost + fishCost + veggieCost + dessertCost + 2.50);
  }
  
  delivery(["9",
  "2",
  "6"]);