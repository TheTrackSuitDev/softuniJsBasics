function schoolSupplies(input) {
    let penPacks = Number(input[0]);
    let markerPacks = Number(input[1]);
    let cleanerLiters = Number(input[2]);
    let discount = Number(input[3]) / 100 * ((penPacks * 5.80) + (markerPacks * 7.20) + (cleanerLiters * 1.20));
    let checkout = (penPacks * 5.80) + (markerPacks * 7.20) + (cleanerLiters * 1.20) - discount;
      console.log(checkout);
  }
  
  schoolSupplies(["4",
  "2",
  "5",
  13]);