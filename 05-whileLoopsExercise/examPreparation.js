function examPrep(input) {
    let index = 0;
    let maxFailed = Number(input[index]);
    index++;
    let task = input[index];
    index++;
    let grade = Number(input[index]);
    index++;
    let tasksSolved = 0;
    let gradeSum = 0;
    let failedTasks = 0;
    let lastTask = "";
    while (task != "Enough") {
        if (failedTasks === maxFailed) {
            break;
        }
        if (grade <= 4) {
            failedTasks++;
        }
        tasksSolved++;
        gradeSum += grade;
        lastTask = task;
        task = input[index];
        index++;
        grade = Number(input[index]);
        index++;
    }
    if (failedTasks === maxFailed) {
        console.log(`You need a break, ${failedTasks} poor grades.`);
    } else if (task === "Enough"){
        let averageGrade = gradeSum / tasksSolved;
        console.log(`Average score: ${averageGrade.toFixed(2)}`);
        console.log(`Number of problems: ${tasksSolved}`);
        console.log(`Last problem: ${lastTask}`);
    }   
}
examPrep(["3",
"Money",
"6",
"Story",
"4",
"Spring Time",
"5",
"Bus",
"6",
"Enough"])