function weddingChallenge(input) {
    let men = Number(input[0]);
    let women = Number(input[1]);
    let tableCapacity = Number(input[2]);
    let printResult = "";
    let tablesTaken = 0;    
    for (let currMan = 1; currMan <= men; currMan++) {
        if (tablesTaken === tableCapacity) {
            break;
        }
        for (let currWoman = 1; currWoman <= women; currWoman++) {
            tablesTaken++;
            printResult += `(${currMan} <-> ${currWoman}) `
            if (tablesTaken === tableCapacity) {
                break;
            }
        }
    }
    console.log(printResult);
}
weddingChallenge(["5","8","40"])