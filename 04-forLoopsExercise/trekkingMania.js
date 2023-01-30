function trekkMania(input) {
    let groupsCount = Number(input[0]);
    let musalaCount = 0;
    let montblancCount = 0;
    let kalimanCount = 0;
    let k2Count = 0;
    let everestCount = 0;
    for (let i = 1; i <= groupsCount; i++) {
        let currGroupMems = Number(input[i]);
        if (currGroupMems < 6) {
            musalaCount += currGroupMems;
        } else if (currGroupMems > 40){
            everestCount += currGroupMems;
        } else if (currGroupMems > 25){
            k2Count += currGroupMems;
        } else if (currGroupMems > 12){
            kalimanCount += currGroupMems;
        } else {
            montblancCount += currGroupMems;
        }
    }
    let totalTrekkers = musalaCount + montblancCount + 
    kalimanCount + k2Count + everestCount;
    let pMusala = musalaCount / totalTrekkers * 100;
    let pMontblanc = montblancCount / totalTrekkers * 100;
    let pKaliman = kalimanCount / totalTrekkers * 100;
    let pK2 = k2Count / totalTrekkers * 100;
    let pEverest = everestCount / totalTrekkers * 100;
    

    console.log(`${pMusala.toFixed(2)}%`);
    console.log(`${pMontblanc.toFixed(2)}%`);
    console.log(`${pKaliman.toFixed(2)}%`);
    console.log(`${pK2.toFixed(2)}%`);
    console.log(`${pEverest.toFixed(2)}%`);
}
trekkMania(["5",
"25",
"41",
"31",
"250",
"6"])