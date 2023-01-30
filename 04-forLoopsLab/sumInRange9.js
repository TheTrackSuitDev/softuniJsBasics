function sumOfRange9(input) {
    let numA = Number(input[0]);
    let numB = Number(input[1]);
    let sum = 0;
    for (let i = numA; i >= numA && i <= numB; i++) {
        let currNumber = i;
        if (currNumber % 9 === 0) {
            sum += currNumber;
        }    
    }
    console.log(`The sum: ${sum}`);

    for (let i = numA; i >= numA && i <= numB; i++) {
        let currNumber = i;
        if (currNumber % 9 === 0) {
            console.log(currNumber);
        }
    }
}
sumOfRange9(["100","200"])