function walking(input) {
    let index = 0;
    let totalSteps = 0;
    
    while (totalSteps < 10000) {
    let steps = input[index];
        if (steps === "Going home") {
            index++;
            steps = Number(input[index]);
            totalSteps += steps;
            break;
        } else {
        steps = Number(input[index]);
        totalSteps += steps;
        index++;
        }
    }
    if (totalSteps < 10000) {
        console.log(`${10000 - totalSteps} more steps to reach goal.`);
    } else {
        console.log(`Goal reached! Good job!`);
        console.log(`${totalSteps - 10000} steps over the goal!`);
    }   
}
walking(["125",
"250",
"4000",
"30",
"2678",
"4682"])