function validNumber(input) {
    let num = Number(input[0]);
    let isValid = num >= 100 && num <= 200 || num === 0;
    if (isValid != true) {
        console.log("invalid");
    }
}
validNumber(["0"])