const button = document.getElementById("generate");
const passwordText = document.getElementById("password");

button.addEventListener("click", () => {

  const chars = "abcdefghijklmnopqrstuvwxyz0123456789";
  let password = "";

  for (let i = 0; i < 10; i++) {
    password += chars[Math.floor(Math.random() * chars.length)];
  }

  passwordText.textContent = password;
});