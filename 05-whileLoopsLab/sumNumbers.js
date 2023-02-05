function sumNum(input) {
    let index = 0;
    let mainNum = Number(input[index]);
    index++;
    let currNum = Number(input[index]);
    index++;
    let sum = 0;
    while (sum < mainNum) {
        sum += currNum;
        currNum = Number(input[index]);
        index++;
    }
    console.log(sum);
}
sumNum(["20",
"1",
"2",
"3",
"4",
"5",
"6"])
