function fishMarket(input) {
    let fishScPrice = Number(input[0]);
    let fishCcPrice = Number(input[1]);
    let fishPalAmount = Number(input[2]);
    let fishSafAmount = Number(input[3]);
    let clamsAmount = Number(input[4]);
    let palRawPrice = fishScPrice * 1.6 * fishPalAmount;
    //let palRealPrice = Math.round(palRawPrice * 100 + Number.EPSILON) / 100;
    let safRawPrice = fishCcPrice * 1.8 * fishSafAmount;
    //let safRealPrice = Math.round(safRawPrice * 100 + Number.EPSILON) / 100;
    let clamsPrice = clamsAmount * 7.50;
    //let totalPrice = palRealPrice + safRealPrice + clamsPrice;
    let totalPrice = palRawPrice + safRawPrice + clamsPrice;
    let totalPriceRounded = Math.round(totalPrice * 100 + Number.EPSILON) / 100;
    console.log(totalPriceRounded.toFixed(2));
    }
  
  fishMarket(["5.55","3.57","4.3","3.6","7"]);