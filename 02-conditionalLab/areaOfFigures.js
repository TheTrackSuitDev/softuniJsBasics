function areaOfFigures(input) {
    let type = (input[0]);
   
    if (type === "square") {
      let side = Number(input[1]);
      let area = Math.pow(side, 2);  
      console.log(area.toFixed(3));
    }  else if(type === "rectangle") {
        let sideA = Number(input[1]);
        let sideB = Number(input[2]);
        let area = sideA * sideB;  
        console.log(area.toFixed(3));
    }  else if (type === "circle") {
        let r = Number(input[1]);
        let area = Math.PI * Math.pow(r, 2);  
        console.log(area.toFixed(3));
    }   else {
        let side = input[1];
        let h = input[2];
        let area = side * h / 2;
        console.log(area.toFixed(3));
    }   
    }

  areaOfFigures (["triangle",
  "4.5",
  "20"])