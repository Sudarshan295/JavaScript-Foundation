let daysValue = 0,
  carTypevalue = 0,
  price;

let days = document.getElementById("days");
let selectCar = document.querySelector("#selectCar");
let displayCost = document.getElementById("displayCost");
let genCostButton = document.querySelector("button");

genCostButton.addEventListener("click", genCost);

function genCost() {
  daysValue = parseInt(days.value);
  carTypevalue = selectCar.value;
  if (carTypevalue == "Economy") {
    price = 4000 * daysValue;
    displayCost.value = price;
  }
  if (carTypevalue == "Midsize") {
    price = 10000 * daysValue;
    displayCost.value = price;
  }
  if (carTypevalue == "Luxury") {
    price = 20000 * daysValue;
    displayCost.value = price;
  }
}
