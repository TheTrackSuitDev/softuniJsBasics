function sumOfPrimeAndNon(input) {
    let index = 0;
    let nextCommand = input[index];
    index++;
    let primeSum = 0;
    let nonPrimeSum = 0;
    while (nextCommand !== "stop") {
        let currNum = Number(nextCommand);
        if (currNum < 0) {
            console.log("Number is negative.");
        } else if (currNum === 0 || currNum === 1) {
            nonPrimeSum += currNum;
        } else if (currNum % 2 == 0 && currNum > 2) {
            nonPrimeSum += currNum;
        } else {
            let currSqrt = Math.sqrt(currNum);
            let isNonPrime = false;
            for (let i = 3; i <= currSqrt; i += 2) {
                if (currNum % i === 0) {
                    nonPrimeSum += currNum;
                    isNonPrime = true;
                }
            }
            if (!isNonPrime) {
                primeSum += currNum;
            }
        }
        nextCommand = input[index];
        index++;
    }
    console.log(`Sum of all prime numbers is: ${primeSum}`);
    console.log(`Sum of all non prime numbers is: ${nonPrimeSum}`);
}
sumOfPrimeAndNon(["0",
"-9",
"0",
"stop"])