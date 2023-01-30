function celToFrh(input) {
  let cel = Number(input[0]);
  let frh = cel * 1.8 + 32;
  
  console.log(frh.toFixed(2));
}

celToFrh(["32.3"]);