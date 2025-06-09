let generateBtn = document.getElementById("generate-password");
let outputPassword = document.getElementById("password");

generateBtn.addEventListener("click", () => {
  let input = document.getElementById("password-input");
  let length = parseInt(input.value);

  const lowercase = "abcdefghijklmnopqrstuvwxyz";
  const uppercase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  const numbers = "0123456789";
  const symbols = "!@#$%^&*()_+[]{}|;:,.<>?";

  let pool = "";
  if (document.getElementById("include-lowercase").checked) {
    pool += lowercase;
  }
  if (document.getElementById("include-uppercase").checked) {
    pool += uppercase;
  }
  if (document.getElementById("include-numbers").checked) {
    pool += numbers;
  }
  if (document.getElementById("include-symbols").checked) {
    pool += symbols;
  }

  if (pool === "") {
    outputPassword.innerHTML = `Please select`;
    return;
  } else if (length <= 0 || input.value === "") {
    outputPassword.innerHTML = "Please enter how long your password should be";
    return;
  } else if (isNaN(length)) {
    outputPassword.innerHTML = "This is not a length";
    return;
  }

  let password = "";
  for (let i = 0; i < length; i++) {
    password += pool.charAt(Math.floor(Math.random() * pool.length));
  }

  outputPassword.innerHTML = password;
});
