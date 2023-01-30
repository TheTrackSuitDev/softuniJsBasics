function circAreaPar(input) {
    
  let param = input[0] * Math.PI * 2;
  let area = input[0] * Math.PI * input[0];
  console.log(area.toFixed(2))
  console.log (param.toFixed(2))
  }
  
  circAreaPar(["3"]);