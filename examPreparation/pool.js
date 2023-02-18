function pool(input) {
   let people = Number(input[0]);
   let entranceFee = Number(input[1]);
   let chairPrice = Number(input[2]);
   let umbrellaPrice = Number(input[3]);
   let entranceTotal = people * entranceFee;
   let chairsNeeded = Math.ceil(people * 0.75);
   let chairTotal = chairsNeeded * chairPrice;
   let umbrellasNeeded = Math.ceil(people / 2);
   let umbrellaTotal = umbrellasNeeded * umbrellaPrice;
   let total = entranceTotal + chairTotal + umbrellaTotal;
   console.log(`${total.toFixed(2)} lv.`);
}
pool(["50",
"6",
"8",
"4"])