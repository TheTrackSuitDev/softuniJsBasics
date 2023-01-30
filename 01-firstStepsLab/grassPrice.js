function grassPrice(input) {
    let grassArea = Number (input [0]);
    let notFinalPrice = Number (grassArea * 7.61);
    let discout = Number ((notFinalPrice / 100) * 18);
    let finalPrice = Number (notFinalPrice - discout)
    console.log(`The final price is: ${finalPrice} lv.`);
    console.log(`The discount is: ${discout} lv.`)   
}

grassPrice(["550"])