function sumDigits(input) {
    let text = input[0];
    let sum = 0;
    for (let i = 0; i <= text.length - 1; i++) {
        let digit = Number(text[i])
        sum += digit;
    }
    console.log(`The sum of the digits is:${sum}`);
}
sumDigits(["564891"])