function avgNum(input) {
    let index = 0;
    let numCount = Number(input[index]);
    index++;
    let sum = 0;
    for (let i = 0; i < numCount; i++) {
        let currNum = Number(input[index]);
        sum += currNum;
        index++;
    }
    console.log((sum / numCount).toFixed(2));
}
avgNum(["4","95","23","76","23"])