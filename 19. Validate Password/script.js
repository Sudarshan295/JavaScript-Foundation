const email = document.getElementById("email");
const password = document.getElementById("password");
const button = document.querySelector("button");
const invalidMsg = document.querySelector(".invalidMsg");
const validMsg = document.querySelector(".validMsg");

button.addEventListener("click", validateForm);

function validateForm(event) {
  if (email.value == "" && password.value == "") {
    return;
  }
  let emailValue = email.value;
  let passwordValue = password.value.length;

  if (emailValue.includes("@") && passwordValue >= 8) {
    validMsg.className = "active";
    event.preventDefault();
    invalidMsg.className = "deactive";
  } else {
    invalidMsg.className = "active";
    event.preventDefault();
    validMsg.className = "deactive";
  }
}
