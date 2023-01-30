function poolPipes(input) {
    let poolVolume = Number(input[0]);
    let pipeOneDebit = Number(input[1]);
    let pipeTwoDebit = Number(input[2]);
    let timePassed = Number(input[3]);

    let pipeOneFilled = pipeOneDebit * timePassed;
    let pipeTwoFilled = pipeTwoDebit * timePassed;
    let allFilled = pipeOneFilled + pipeTwoFilled;

    if (allFilled <= poolVolume) {
        let percFilledOne = pipeOneFilled / (allFilled / 100);
        let percFilledTwo = pipeTwoFilled / (allFilled / 100);
        let allPercFilled = allFilled / (poolVolume / 100); 
        console.log(`The pool is ${allPercFilled.toFixed(2)}% full. Pipe 1: ${percFilledOne.toFixed(2)}%. Pipe 2: ${percFilledTwo.toFixed(2)}%.`);
    } else {
        console.log(`For ${timePassed.toFixed(2)} hours the pool overflows with ${allFilled - poolVolume.toFixed(2)} liters.`);
    }
}

poolPipes(["100","100","100","2.5"])