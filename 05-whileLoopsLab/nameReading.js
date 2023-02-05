function nameRead(input) {
    let index = 0;
    let currName = input[index];
    while (currName != "Stop") {
        console.log(currName);
        index++;
        currName = input[index];
    }
}
nameRead(["Sofia",
"Berlin",
"Moscow",
"Athens",
"Madrid",
"London",
"Paris",
"Stop",
"AfterStop"])