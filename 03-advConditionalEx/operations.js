function operations(input) {
    let nOne = Number(input[0]);
    let nTwo = Number(input[1]);
    let operator = input[2];
    let result = 0;

    switch (operator) {
        case "+":
            result = nOne + nTwo;
            break;
        case "-":
            result = nOne - nTwo;
            break;
        case "*":
            result = nOne * nTwo;
            break;
        case "/":
            result = nOne / nTwo;
            break;
        default:
           result = nOne % nTwo;
            break;
    }
    switch (operator) {
        case "+":
        case "-":
        case "*":
           if (result % 2 === 0) {
            console.log(`${nOne} ${operator} ${nTwo} = ${result} - even`);
           } else {
            console.log(`${nOne} ${operator} ${nTwo} = ${result} - odd`);
           }
            break;
        case "/":
            if (nTwo === 0) {
                console.log(`Cannot divide ${nOne} by zero`);
               } else {
                console.log(`${nOne} ${operator} ${nTwo} = ${result.toFixed(2)}`);
               }
            break;
        default:
            if (nTwo === 0) {
                console.log(`Cannot divide ${nOne} by zero`);
               } else {
                console.log(`${nOne} ${operator} ${nTwo} = ${result}`);
               }
            break;
    }
    
}

operations(["10",
"0",
"%"])