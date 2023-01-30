function flowers(input) {
    let magnoliaCount = Number(input[0]);
    let ZumbCount = Number(input[1]);
    let roseCount = Number(input[2]);
    let cactusCount = Number(input[3]);
    let giftPrice = Number(input[4]);
    let gain = ((magnoliaCount * 3.25) + 
    (ZumbCount * 4) + (roseCount * 3.5) + 
    (cactusCount * 8)) * 0.95;

    if (gain >= giftPrice) {
        console.log(`She is left with ${Math.floor(gain - giftPrice)} leva.`);
    } else {
        console.log(`She will have to borrow ${Math.ceil(giftPrice - gain)} leva.`)
    }
}

flowers(["15","7","5","10","100"])