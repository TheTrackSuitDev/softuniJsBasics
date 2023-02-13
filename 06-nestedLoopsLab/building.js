function building(input) {
    let floors = Number(input[0]);
    let objects = Number(input[1]);
    let floorLog = "";
    for (let i = floors; i > 0; i--) {
        for (let y = 0; y < objects; y++) {
            if (i === floors) {
                floorLog += "L" + i + y + " ";
            } else if (i % 2 === 0) {
                floorLog += "O" + i + y + " ";
            } else {
                floorLog += "A" + i + y + " ";
            }      
        }
        console.log(floorLog); 
        floorLog = "";     
    }
}        
building(["6","4"])