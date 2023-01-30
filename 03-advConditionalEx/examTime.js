function examTime(input) {
    let examHour = Number(input[0]);
    let examMin = Number(input[1]);
    let examArrivalHour = Number(input[2]);
    let examArrivalMin = Number(input[3]);
    let exaTimeInMin = examHour * 60 + examMin;
    let arrivalTimeInMin = examArrivalHour * 60 + examArrivalMin;
    let earlyLateOnTime = "";
    if (exaTimeInMin == arrivalTimeInMin || (exaTimeInMin - arrivalTimeInMin <= 30 && exaTimeInMin - arrivalTimeInMin > 0)) {
        earlyLateOnTime = "On time";
    } else if (exaTimeInMin > arrivalTimeInMin){
        earlyLateOnTime = "Early";
    } else {
        earlyLateOnTime = "Late";
    }
    console.log(earlyLateOnTime);

    switch (earlyLateOnTime) {
        case "Late":
            let minLate = arrivalTimeInMin - exaTimeInMin;
            if (minLate < 60) {
                console.log(`${minLate} minutes after the start`);
            }   else {
                if (minLate % 60 < 10) {
                    console.log(`${Math.floor(minLate / 60)}:0${minLate % 60} hours after the start`)  
                } else {
                    console.log(`${Math.floor(minLate / 60)}:${minLate % 60} hours after the start`);
                }
            }
            break;
        case "Early":
        case "On time":
            let minEarly = exaTimeInMin - arrivalTimeInMin;
            if (minEarly < 60 && minEarly != 0) {
                console.log(`${minEarly} minutes before the start`);
            }   else {
                if (minEarly % 60 < 10 && minEarly != 0) {
                    console.log(`${Math.floor(minEarly / 60)}:0${minEarly % 60} hours before the start`)  
                } else if (minEarly % 60 >= 10){
                    console.log(`${Math.floor(minEarly / 60)}:${minEarly % 60} hours before the start`);
                }
            }
            break;
        default:
            break;
    }
}

examTime(["11",
"30",
"12",
"29"])