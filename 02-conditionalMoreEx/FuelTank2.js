function fuelPrice(input) {
  let fuelType = input[0];
  let fuelAmount = Number(input[1]);
  let discountCard = input[2];

  let gasoPrice = 2.22;
  let dieselPrice = 2.33;
  let gasPrice = 0.93;

  if (discountCard === "Yes") {
    gasoPrice -= 0.18;
    dieselPrice -= 0.12;
    gasPrice -= 0.08;
  }

  let totalPrice = 0;
  if (fuelType === "Gasoline") {
    totalPrice = fuelAmount * gasoPrice;
  } else if (fuelType === "Diesel") {
    totalPrice = fuelAmount * dieselPrice;
  } else {
    totalPrice = fuelAmount * gasPrice;
  }

  if (fuelAmount >= 20 && fuelAmount <= 25) {
    totalPrice *= 0.92;
  } else if (fuelAmount > 25) {
    totalPrice *= 0.9;
  }

  console.log(`${totalPrice.toFixed(2)} lv.`);
}

fuelPrice(["Diesel", "19", "No"]);
