const generatePassword = require("generate-password");

function generateRandomPassword() {
  const password = generatePassword({
    length: 12,
    numbers: true,
  });
  console.log(password);
}

generateRandomPassword();
