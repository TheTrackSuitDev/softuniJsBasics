function fitnessCenter(input) {
    let index = 0;
    let clients = Number(input[index]);
    index++;
    let backCount = 0;
    let chestCount = 0;
    let legsCount = 0;
    let absCount = 0;
    let shakeCount = 0;
    let barCount = 0;
    let trainCount = 0;
    let proteinCount = 0;
    for (let i = 1; i <= clients; i++) {
        let nextAction = input[i];
        switch (nextAction) {
            case "Back":
                backCount++;
                trainCount++;
                break;
            case "Chest":
                chestCount++;
                trainCount++;
                break;
            case "Legs":
                legsCount++;
                trainCount++;
                break;
            case "Abs":
                absCount++;
                trainCount++;
                break;
            case "Protein shake":
                shakeCount++;
                proteinCount++;
                break;
            case "Protein bar":
                barCount++;
                proteinCount++;
                break;
        }
    }
    let trainPercentage = trainCount / clients * 100;
    let proteinPercentage = proteinCount / clients * 100;
    console.log(`${backCount} - back`);
    console.log(`${chestCount} - chest`);
    console.log(`${legsCount} - legs`);
    console.log(`${absCount} - abs`);
    console.log(`${shakeCount} - protein shake`);
    console.log(`${barCount} - protein bar`);
    console.log(`${trainPercentage.toFixed(2)}% - work out`);
    console.log(`${proteinPercentage.toFixed(2)}% - protein`);
}
fitnessCenter(["10",
"Back",
"Chest",
"Legs",
"Abs",
"Protein shake",
"Protein bar",
"Protein shake",
"Protein bar",
"Legs",
"Abs"])