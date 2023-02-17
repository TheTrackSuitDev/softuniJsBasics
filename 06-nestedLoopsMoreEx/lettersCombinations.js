function lettersCombinations(input) {
    let startLetter = input[0];
    let endLetter = input[1];
    let excLetter = input[2];
    let stLetterAsc = Number(startLetter.charCodeAt());
    let endLetterAsc = Number(endLetter.charCodeAt());
    let excLetterAsc = Number(excLetter.charCodeAt());
    let printResult = "";
    let comboCount = 0;
    for (let a = stLetterAsc; a <= endLetterAsc; a++) {
        if (a === excLetterAsc) {
            continue;
        }
        for (let b = stLetterAsc; b <= endLetterAsc; b++) {
            if (b === excLetterAsc) {
                continue;
            }
            for (let c = stLetterAsc; c <= endLetterAsc; c++) {
                if (c === excLetterAsc) {
                    continue;
                }
                let letOne = String.fromCharCode(a);
                let letTwo = String.fromCharCode(b);
                let letThree = String.fromCharCode(c);
                printResult += letOne + letTwo + letThree + " ";
                comboCount++;              
            }
        }
    }
    console.log(printResult + comboCount);
}

lettersCombinations(["a","c","z"])