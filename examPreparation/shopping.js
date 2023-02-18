function shopping(input) {
    let budget = Number(input[0]);
    let gpuCount = Number(input[1]);
    let cpuCount = Number(input[2]);
    let ramCount = Number(input[3]);
    let gpuTotal = gpuCount * 250;
    let cpuTotal = cpuCount * (gpuTotal * 0.35);
    let ramTotal = ramCount * (gpuTotal * 0.1);
    let total = gpuTotal + cpuTotal + ramTotal;
    if (gpuCount > cpuCount) {
        total *= 0.85;
    }
    if (total <= budget) {
        console.log(`You have ${(budget - total).toFixed(2)} leva left!`);
    } else {
        console.log(`Not enough money! You need ${(total - budget).toFixed(2)} leva more!`);
    }
}
shopping(["920.45",
"3",
"1",
"1"])