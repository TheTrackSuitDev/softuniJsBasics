function carNumbers(input) {
    let startNum = Number(input[0]);
    let endNumber = Number(input[1]);
    let printResult = "";
    for (let numOne = startNum; numOne <= endNumber; numOne++) {
        for (let numTwo = startNum; numTwo <= endNumber; numTwo++) {
            for (let numThree = startNum; numThree <= endNumber; numThree++) {
                if ((numTwo + numThree) % 2 !== 0) {
                    continue;
                };
                for (let numFour = startNum; numFour <= endNumber; numFour++) {
                    if (numOne % 2 === 0 && numFour % 2 === 0) {
                        continue;
                    }
                    if (numOne % 2 !== 0 && numFour % 2 !== 0) {
                        continue;
                    }
                    if (numOne <= numFour) {
                        continue;
                    }
                    let currNum = "" + numOne + numTwo + numThree + numFour + " ";
                    printResult += currNum;            
                }
                
            }
            
        }
        
    }
    console.log(printResult);    
}
carNumbers(["3","5"])