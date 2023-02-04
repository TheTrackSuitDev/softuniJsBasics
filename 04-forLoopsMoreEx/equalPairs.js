function equalPairs(input) {
    let index = 0;
    let pairsCount = Number(input[index]);
    index++;
    let maxDiff = 0;
    let value = 0;
    let areEqual = true;
    if (pairsCount > 1) {
        for (let i = 0; i < pairsCount - 1; i++) {
            let currentNumOne = Number(input[index]);
            index++;
            let currentNumTwo = Number(input[index]);
            index++;
            let currentValue = currentNumOne + currentNumTwo;
            let nextNumOne = Number(input[index]);
            index++;
            let nextNumTwo = Number(input[index]);
            index--;
            let nextValue = nextNumOne + nextNumTwo;
            if (currentValue != nextValue) {
                areEqual = false;
                let currentDiff = Math.abs(currentValue - nextValue);
                if (currentDiff > maxDiff) {
                    maxDiff = currentDiff
                }  
            } else {
                value = currentValue;
            }
        }
        if (areEqual == true) {
            console.log(`Yes, value=${value}`);
        } else {
        console.log(`No, maxdiff=${maxDiff}`);
        }  
    } else {
        console.log(`Yes, value=${Number(input[1]) + Number(input[2])}`);
    }
}
equalPairs(["1","5","5"])