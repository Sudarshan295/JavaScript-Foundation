let Celsius = document.querySelector(".celsius");
const  fahrenheit = document.querySelector(".fahrenheit");

const button = document.querySelector("button");

button.addEventListener("click", convertF);
function convertF() {
  let value = Celsius.value;
  var f = value * (9 / 5) + 32;
  fahrenheit.innerText = `${f} ℉`;
}
