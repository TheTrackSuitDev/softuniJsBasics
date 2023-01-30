function transport(input) {
    let distance = Number(input[0]);
    let time = (input[1]);
    let price = 0;
    if (distance < 20 && time === "day") {
        price = distance * 0.79 + 0.70;
    } else if (distance < 20 && time === "night"){
        price = distance * 0.90 + 0.70;
    } else if (distance >= 20 && distance < 100){
        price = distance * 0.09;
    } else {
        price = distance * 0.06;
    }

    console.log(price.toFixed(2));
}

transport(["7","night"])