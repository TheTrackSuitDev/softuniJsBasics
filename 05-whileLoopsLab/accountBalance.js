function accountBalance(input) {
    let index = 0;
    let nextTransaction = Number(input[index]);
    index++;
    let total = 0;
    while (true) {
        if (nextTransaction < 0) {
            console.log(`Invalid operation!`);
            break;
        } else if (Number.isNaN(nextTransaction)){
            break;
        } else {
        total += nextTransaction;
        console.log(`Increase: ${nextTransaction.toFixed(2)}`);
        nextTransaction = Number(input[index]);
        index++;
        }
    }
    console.log(`Total: ${total.toFixed(2)}`);
}
accountBalance(["120",
"45.55",
"-150"])
