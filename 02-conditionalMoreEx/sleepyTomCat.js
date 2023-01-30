function sleepyCat(input) {
    let holiDays = Number(input[0]);
    let workDays = 365 - holiDays;
    let allPlayTimeMin = (holiDays * 127) + (workDays * 63);
   
    if (allPlayTimeMin <= 30000) {
        console.log("Tom sleeps well");
        let hoursLeft = Math.floor((30000 - allPlayTimeMin) / 60);
        let minsLeft = (30000 - allPlayTimeMin) % 60;
        console.log(`${hoursLeft} hours and ${minsLeft} minutes less for play`);
    } else {
        console.log("Tom will run away");
        let hoursOver = Math.floor((allPlayTimeMin - 30000) / 60);
        let minsOver = (allPlayTimeMin - 30000) % 60;
        console.log(`${hoursOver} hours and ${minsOver} minutes more for play`);
    }
}

sleepyCat(["113"])