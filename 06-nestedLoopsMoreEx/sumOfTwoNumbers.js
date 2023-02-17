function sumOfTwo(input) {
    let startNum = Number(input[0]);
    let endNum = Number(input[1]);
    let magicNum = Number(input[2]);
    let comboCount = 0;
    let comboFound = false;
    for (let a = startNum; a <= endNum; a++) {
        for (let b = startNum; b <= endNum; b++) {
            comboCount++;
            if (a + b === magicNum) {
                console.log(`Combination N:${comboCount} (${a} + ${b} = ${magicNum})`);
                comboFound = true;
                break;
            }
        }
        if (comboFound) {
            break;
        }
    }
    if (!comboFound) {
    console.log(`${comboCount} combinations - neither equals ${magicNum}`);    
    }
    
}        
sumOfTwo(["88","888","1000"])