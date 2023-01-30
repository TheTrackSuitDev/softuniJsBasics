function swimRecord(input) {
    let currRecord = Number(input[0]);
    let distance = Number(input[1]);
    let secPerM = Number(input[2]);
    let watResist = (Math.floor(distance / 15)) * 12.5;
    let newRecord = distance * secPerM + watResist;
    
    if (newRecord < currRecord) {
      console.log(`Yes, he succeeded! The new world record is ${newRecord.toFixed(2)} seconds.`);
    } else {
      console.log(`No, he failed! He was ${(newRecord - currRecord).toFixed(2)} seconds slower.`);
    }
  }
  
  swimRecord(["55555.67","3017","5.03"]);