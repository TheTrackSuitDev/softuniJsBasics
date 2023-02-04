function grades(input) {
    let index = 0;
    let studentsCount = input[index];
    index++;
    let gradesSum = 0;
    let to3Count = 0;
    let to4Count = 0;
    let to5Count = 0;
    let above5Count = 0;
    for (let i = 0; i < studentsCount; i++) {
        let currentGrade = Number(input[index]);
        if (currentGrade >= 5) {
            above5Count++;
        } else if (currentGrade >= 4) {
            to5Count++;
        } else if (currentGrade >= 3){
            to4Count++;
        } else if (currentGrade >= 2) {
            to3Count++;
        }
        gradesSum +=currentGrade;
        index++;    
    }
    let averageGrade = gradesSum / studentsCount;
    let to3Percentage = to3Count / studentsCount * 100;
    let to4Percentage = to4Count / studentsCount * 100;
    let to5Percentage = to5Count / studentsCount * 100;
    let above5Percentage = above5Count / studentsCount * 100;

    console.log(`Top students: ${above5Percentage.toFixed(2)}%`);
    console.log(`Between 4.00 and 4.99: ${to5Percentage.toFixed(2)}%`);
    console.log(`Between 3.00 and 3.99: ${to4Percentage.toFixed(2)}%`);
    console.log(`Fail: ${to3Percentage.toFixed(2)}%`);
    console.log(`Average: ${averageGrade.toFixed(2)}`);
}
grades(["10","3.00","2.99","5.68","3.01","4","4","6.00","4.50","2.44","5"])