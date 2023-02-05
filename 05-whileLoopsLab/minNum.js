function minNum(input) {
    let index = 0;
    let nextInput = input[index];
    index++;
    let minNum = Number.MAX_SAFE_INTEGER;
    while (nextInput !== "Stop") {
        let nextNum = Number(nextInput);
        if (nextNum < minNum) {
            minNum = nextNum
        }
        nextInput = input[index];
        index++;
    }
    console.log(minNum);
}
minNum(["100",
"99",
"80",
"70",
"Stop"])