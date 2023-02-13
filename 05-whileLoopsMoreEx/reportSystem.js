function reportSystem(input) {
    let index = 0;
    let moneyTarget = Number(input[index]);
    index++;
    let command = input[index];
    let ccSales = 0;
    let ccMoney = 0;
    let cashSales = 0;
    let cashMoney = 0;
    while (command != "End") {
        command = Number(command);
        if (ccMoney + cashMoney >= moneyTarget) {
            console.log(`Average CS: ${(cashMoney / cashSales).toFixed(2)}`);
            console.log(`Average CC: ${(ccMoney /ccSales).toFixed(2)}`);
            break;
        }
        if (index % 2 !== 0) {  //Cash payments
            if (command > 100) {
                console.log("Error in transaction!");
            } else {
                console.log("Product sold!");
                cashMoney += command;
                cashSales++;
            }
        } else {   // Card payments
            if (command < 10) {
                console.log("Error in transaction!");
            } else {
                console.log("Product sold!");
                ccMoney += command;
                ccSales++;
            }
        }
        index++;
        command = input[index];
    }
    if (command === "End") {
        console.log("Failed to collect required money for charity.");
    }
}
reportSystem(["600","86","150","98","227","End"])