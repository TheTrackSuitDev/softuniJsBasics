function football(input) {
    let index = 0;
    let capacity = Number(input[index]);
    index++;
    let fansCount = Number(input[index]);
    index++;
    let sectorACount = 0;
    let sectorBCount = 0;
    let sectorVCount = 0;
    let sectorGCount = 0;
    for (let i = 0; i < fansCount; i++) {
        let currentFanSector = input[index];
        switch (currentFanSector) {
            case "A":
                sectorACount++;
                break;
            case "B":
                sectorBCount++;
                break;
            case "V":
                sectorVCount++;
                break;
            default:
                sectorGCount++;
                break;
        }
        index++;    
    }
    let overallPercentage = fansCount / capacity * 100;
    let sectorAPercentage = sectorACount / fansCount * 100;
    let sectorBPercentage = sectorBCount / fansCount * 100;
    let sectorVPercentage = sectorVCount / fansCount * 100;
    let sectorGPercentage = sectorGCount / fansCount * 100;

    console.log(`${sectorAPercentage.toFixed(2)}%`);
    console.log(`${sectorBPercentage.toFixed(2)}%`);
    console.log(`${sectorVPercentage.toFixed(2)}%`);
    console.log(`${sectorGPercentage.toFixed(2)}%`);
    console.log(`${overallPercentage.toFixed(2)}%`);   
}
football(["76","10","A","V","V","V","G","B","A","V","B","B"])