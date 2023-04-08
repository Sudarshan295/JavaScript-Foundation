let color1, color2, inputVal1, inputVal2;

color1 = document.getElementById("color1");
color2 = document.getElementById("color2");

const resultColor = document.getElementById("resultColor");

function valueAssign() {
  inputVal1 = color1.value.toLowerCase();
  inputVal2 = color2.value.toLowerCase();

  console.log(inputVal1);
  console.log(inputVal2);

  switch (true) {
    case inputVal1 == "red" && inputVal2 == "blue":
      resultColor.innerText = "Purple";
      document.body.style.backgroundColor = "Purple";

      break;

    case inputVal1 == "blue" && inputVal2 == "red":
      resultColor.innerText = "Purple";
      document.body.style.backgroundColor = "Purple";

      break;

    case inputVal1 == "red" && inputVal2 == "yellow":
      resultColor.innerText = "Orange";
      document.body.style.backgroundColor = "Orange";

      break;

    case inputVal1 == "yellow" && inputVal2 == "red":
      resultColor.innerText = "Orange";
      document.body.style.backgroundColor = "Orange";

      break;

    case inputVal1 == "yellow" && inputVal2 == "blue":
      resultColor.innerText = "Green";
      document.body.style.backgroundColor = "Green";

      break;

    case inputVal1 == "blue" && inputVal2 == "yellow":
      resultColor.innerText = "Green";
      document.body.style.backgroundColor = "Green";

      break;

    default:
      resultColor.innerText = "Invalid color combination";
      document.body.style.backgroundColor = "white";
      break;
  }
}
