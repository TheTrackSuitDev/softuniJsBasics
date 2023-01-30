function weather(input) {
    
    let currTemp = Number(input[0]);
    if ((currTemp >= 26.00) && (currTemp <= 35.00)) {
      console.log("Hot");
    } else if ((currTemp >= 20.1) && (currTemp <= 25.9)) {
      console.log("Warm");
    } else if ((currTemp >= 15.00) && (currTemp <= 20.00)) {
        console.log("Mild");
    } else if ((currTemp >= 12.00) && (currTemp <= 14.9)) {
        console.log("Cool");
    } else if ((currTemp >= 5.00) && (currTemp <= 11.9)) {
        console.log("Cold");
    } else {
        console.log("unknown");
    }
}

  weather(["20.01"]);