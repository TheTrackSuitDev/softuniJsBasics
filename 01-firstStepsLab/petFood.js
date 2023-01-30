function petFood(input) {
    let dogFood = Number (input [0]);
    let catFood = Number (input [1]);
    let checkout = Number ((dogFood * 2.5) + (catFood * 4));
    console.log(`${checkout} lv.`);
}

petFood(["5",
"4"])