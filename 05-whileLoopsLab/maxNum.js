function maxNum(input) {
    let index = 0;
    let nextInput = input[index];
    index++;
    let maxNum = Number.MIN_SAFE_INTEGER;
    while (nextInput !== "Stop") {
        let nextNum = Number(nextInput);
        if (nextNum > maxNum) {
            maxNum = nextNum
        }
        nextInput = input[index];
        index++;
    }
    console.log(maxNum);
}
maxNum(["-1",
"-2",
"Stop"])
