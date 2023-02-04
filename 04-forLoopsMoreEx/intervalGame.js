function intervals(input) {
    let index = 0;
    let steps = input[index];
    index++;
    let result = 0;
    let to10Count = 0;
    let to20Count = 0;
    let to30Count = 0;
    let to40Count = 0;
    let to51Count = 0;
    let invalidCount = 0;
    for (let i = 0; i < steps; i++) {
        let currentNum = Number(input[index]);
        if (currentNum < 0 || currentNum > 50) {
            invalidCount++;
            result /= 2;
        } else if (currentNum < 10) {
            to10Count++;
            result += currentNum * 0.2;
        } else if (currentNum < 20){
            to20Count++;
            result += currentNum * 0.3;
        } else if (currentNum < 30) {
            to30Count++;
            result += currentNum * 0.4;
        } else if (currentNum < 40) {
            to40Count++;
            result += 50;
        } else {
            to51Count++;
            result += 100;
        }
        index++;    
    }

    let to10Percentage = to10Count / steps * 100;
    let to20Percentage = to20Count / steps * 100;
    let to30Percentage = to30Count / steps * 100;
    let to40Percentage = to40Count / steps * 100;
    let to51Percentage = to51Count / steps * 100;
    let invalidPercentage = invalidCount / steps * 100;

    console.log(`${result.toFixed(2)}`);
    console.log(`From 0 to 9: ${to10Percentage.toFixed(2)}%`);
    console.log(`From 10 to 19: ${to20Percentage.toFixed(2)}%`);
    console.log(`From 20 to 29: ${to30Percentage.toFixed(2)}%`);
    console.log(`From 30 to 39: ${to40Percentage.toFixed(2)}%`);
    console.log(`From 40 to 50: ${to51Percentage.toFixed(2)}%`);
    console.log(`Invalid numbers: ${invalidPercentage.toFixed(2)}%`);

    
}
intervals(["10","43","57","-12","23","12","0","50","40","30","20"])