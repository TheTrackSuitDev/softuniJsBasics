function luckyNumbers(input) {
    let n = Number(input[0]);
    let printResult = "";
    for (let currNum = 1111; currNum <= 9999; currNum++) {
        let currNumStr = currNum + "";
        if (Number(currNumStr[0]) + Number(currNumStr[1]) !== 
        Number(currNumStr[2]) + Number(currNumStr[3])) {
            continue;
        }
        if (n % (Number(currNumStr[0]) + Number(currNumStr[1])) !== 0) {
            continue;
        }
        if (Number(currNumStr[0]) === 0 || Number(currNumStr[1]) === 0 || 
        Number(currNumStr[2]) === 0 || Number(currNumStr[3]) === 0) {
            continue;
        }
        printResult += currNumStr + " ";   
    }
    console.log(printResult);
}
luckyNumbers(["7"])