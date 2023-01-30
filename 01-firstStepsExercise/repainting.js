function repainting(input) {
    let nylon = Number(input[0]) + 2;
    let paint = Number(input[1]) * 1.1;
    let solvent = Number(input[2]);
    let matCosts = (nylon * 1.50) + (paint * 14.5) + (solvent * 5.00) + 0.40;
    let hoursCosts = Number(input[3]) * (matCosts * 0.3);
    
    console.log(matCosts + hoursCosts);
  }
  
  repainting(["5",
  "10",
  "10",
  "1"]);