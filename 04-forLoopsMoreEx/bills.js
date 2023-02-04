function bills(input) {
    let index = 0;
    let months = input[index];
    index++;
    let electricity = 0;
    let water = 0;
    let internet = 0;
    let others = 0;
    for (let i = 0; i < months; i++) {
        let currentElectBill = Number(input[index]);
        electricity +=currentElectBill;
        water += 20;
        internet += 15;
        others += (currentElectBill + 35) * 1.2;
        index++;    
    }
    let average = (electricity + water + internet + others) / months;

    console.log(`Electricity: ${electricity.toFixed(2)} lv`);
    console.log(`Water: ${water.toFixed(2)} lv`);
    console.log(`Internet: ${internet.toFixed(2)} lv`);
    console.log(`Other: ${others.toFixed(2)} lv`);
    console.log(`Average: ${average.toFixed(2)} lv`);
    
}
bills(["5","68.63","89.25","132.53","93.53","63.22"])