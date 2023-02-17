function pinCodes(input) {
    let numOneMax = Number(input[0]);
    let numTwoMax = Number(input[1]);
    let numThreeMax = Number(input[2]);
    for (let a = 1; a <= numOneMax; a++) {
        let digOne = 0;
        let digTwo = 0;
        let digThree = 0;
        if (a % 2 === 0) {
           digOne = a; 
        } else {
            continue;
        }
        for (let b = 1; b <= numTwoMax; b++) {
            if (b === 2 || b === 3 || b === 5 || b === 7) {
                digTwo = b;    
            } else {
                continue;
            }
            for (let c = 1; c <= numThreeMax; c++) {
                if (c % 2 === 0) {
                    digThree = c; 
                } else {
                    continue;
                }
                console.log(`${digOne} ${digTwo} ${digThree}`);                
            }  
        }
    }
}
pinCodes(["3","5","5"])