function timeNeeded(input) {
    let archName = input [0];
    let projectCount = Number (input [1]);
    let hoursNeeded = Number (projectCount * 3);
    console.log(`The architect ${archName} will need ${hoursNeeded} hours to complete ${projectCount} project/s.`);
}

timeNeeded(["Miro",
"5"])