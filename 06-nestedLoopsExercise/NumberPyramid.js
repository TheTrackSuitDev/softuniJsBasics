function numberPyramid(input) {
    let n = Number(input[0]);
    let end = false;
    let current = 1;
    let printLine = "";
    for (let rows = 1; rows <= n; rows++) {
        for (let cols = 1; cols <= rows; cols++) {
            if (current > n) {
                end = true;
                break;
            }          
            printLine += current + " ";
            current++;
        }
        console.log(printLine);
        printLine = "";
        if (end) {
            break;
        }
    }
}
numberPyramid(["7"])