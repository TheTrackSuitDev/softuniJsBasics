// • Първи ред – Цена за килограм зеленчуци – реално число[0.00… 1000.00]
// • Втори ред – Цена за килограм плодове – реално число[0.00… 1000.00]
// • Трети ред – Общо килограми на зеленчуците – цяло число[0… 1000]
// • Четвърти ред – Общо килограми на плодовете – цяло число[0… 1000]

function veggiePrice(input) {
  let vPricePerKg = Number(input[0]);
  let fPricePerKg = Number(input[1]);
  let vAmount = Number(input[2]);
  let fAmount = Number(input[3]);
  let totalBgn = vPricePerKg * vAmount + fPricePerKg * fAmount;
  let totalEur = totalBgn / 1.94;
  
  console.log(totalEur.toFixed(2));
}

veggiePrice(["0.194",
"19.4",
"10",
"10"
]);