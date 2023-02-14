function trainers(input) {
    let index = 0;
    let judges = Number(input[index]);
    index++;
    let command = input[index];
    index++;
    let themeGradesSum = 0;
    let themesCount = 0;
    while (command !== "Finish") {
        let currTheme = command;
        themesCount++;
        let currGradeSum = 0;
        for (let i = 0; i < judges; i++) {
            let currGrade = Number(input[index]);
            index++;
            currGradeSum += currGrade;            
        }
        let currThemeAvg = currGradeSum / judges;
        themeGradesSum += currThemeAvg;
        console.log(`${currTheme} - ${currThemeAvg.toFixed(2)}.`);
        command = input[index];
        index++;
    }
    let overallAvg = themeGradesSum / themesCount;
    console.log(`Student's final assessment is ${overallAvg.toFixed(2)}.`);
}
trainers(["2",
"Objects and Classes",
"5.77",
"4.23",
"Dictionaries",
"4.62",
"5.02",
"RegEx",
"2.88",
"3.42",
"Finish"])