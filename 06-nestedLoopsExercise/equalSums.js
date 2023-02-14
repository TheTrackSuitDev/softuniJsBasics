function equalSums(input) {
    let nOne = Number(input[0]);
    let nTwo = Number(input[1]);
    let printResult = "";
    for (let i = nOne; i <= nTwo; i++) {
        let currNum = "" + i;
        let evenSum = 0;
        let oddSum = 0;
        for (let j = 0; j <= 5; j++) {
            let currDig = Number(currNum.charAt(j));
            if (j % 2 === 0) {
                oddSum += currDig;
            } else {
                evenSum += currDig;
            }
        }
        if (evenSum === oddSum) {
            printResult += currNum + " ";
        }
    }
    console.log(printResult);
}
equalSums(["123456",
"124000"])