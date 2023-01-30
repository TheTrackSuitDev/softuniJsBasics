function cinema(input) {
    let showType = input[0];
    let rows = Number(input[1]);
    let colums = Number(input[2]);
    let totalSeats = rows * colums;
    let price = 0;
    switch (showType) {
        case "Premiere":
            price = 12.00;
            break;
        case "Normal":
            price = 7.50;
            break;    
        default:
            price = 5.00;
            break;
    }
    console.log(`${(price * totalSeats).toFixed(2)} leva`);
}

cinema(["Discount",
"12",
"30"])