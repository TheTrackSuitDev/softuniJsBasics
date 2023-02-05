function graduation(input) {
    let index = 0;
    let name = input[index];
    index++;
    let classesPassed = 0;
    let classesFailed = 0;
    let gradeTotal = 0;
    let nextGrade = Number(input[index]);
        index++;
    while (classesPassed < 12) {
        if (classesFailed > 1) {
            break;            
        }
        if (nextGrade < 4.00) {
            classesFailed++;
            nextGrade = Number(input[index]);
            index++;
            continue;
        }
        classesPassed++;
        gradeTotal += nextGrade;
        nextGrade = Number(input[index]);
        index++;
    }
    if (classesFailed > 1) {
        console.log(`${name} has been excluded at ${classesPassed + 1} grade`);
    } else {
        let averageGrade = gradeTotal / 12;
    console.log(`${name} graduated. Average grade: ${averageGrade.toFixed(2)}`);
    }
}
graduation(["Mimi",
"5",
"6",
"5",
"6",
"5",
"6",
"6",
"2",
"3"]) 