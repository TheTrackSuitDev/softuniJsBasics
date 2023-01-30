function multiply(input) {
    for (let i = 0; i <= input.length; i++) {
      let currNum = Number(input[i]);
      if (currNum < 0) {
          console.log("Negative number!");
          break;
      }
      let sum = (currNum * 2).toFixed(2);
      console.log("Result: " + sum);
  }
}
multiply(["12","43.2144","12.3","-543.23","20"])