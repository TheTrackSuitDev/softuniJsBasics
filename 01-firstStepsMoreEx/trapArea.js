function trapArea(input) {
    let baseA = Number(input[0]);
    let baseB = Number(input[1]);
    let sideH = Number(input[2]);
    let area = ((baseA + baseB) * sideH / 2).toFixed(2);
    
    console.log(area);
  }
  
  trapArea(["8","13","7"]);