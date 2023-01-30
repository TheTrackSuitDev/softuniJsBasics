function housePaint(input) {
    let height = Number(input[0]);
    let lenght = Number(input[1]);
    let roofHeight = Number(input[2]);
    let greenAreaSmall = height * height * 2 - (1.2 * 2);
    let greenAreaLarge = height * lenght * 2 - (1.5 * 1.5 * 2);
    let greenAreaTotal = greenAreaSmall + greenAreaLarge;
    let redAreaLarge = height * lenght * 2;
    let redAreaSmall = height * roofHeight / 2 * 2;
    let redAreaTotal = redAreaSmall + redAreaLarge;
    let greenNeeded = greenAreaTotal / 3.4;
    let redNeeded = redAreaTotal / 4.3;
    
    console.log(greenNeeded.toFixed(2));
    console.log(redNeeded.toFixed(2));
    }
  
  housePaint(["10.25","15.45","8.88"]);