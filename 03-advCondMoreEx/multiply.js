function multiply(input) {
    let n = 0;
    while (n < input.length) {
        let currNum = Number(input[n]);
        if (currNum < 0) {
            console.log("Negative number!");
            break;
        }
        let sum = (currNum * 2).toFixed(2);
        console.log("Result: " + sum);
        n ++;
    }
}
multiply(["12","43.2144","12.3","543.23","-20"])