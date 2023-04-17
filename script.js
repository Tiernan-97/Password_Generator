// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePass();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

function generatePass () {

  const specialCharacters = "!#$%&'()*+,-./:;<=>?@^_`/~";
  const numbers = "0123456789";
  const lowercaseLetters = "abcdefghijklmnopqrstuvwxyz";
  const uppercaseLetters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";


  var passLength = 0;
  var passSpecial = false;
  var passNumbers = false;
  var passLowercase = false;
  var passUppercase = false;

  passLength = window.prompt("How many characters would you like to have in your password?");

  if (!passLength) {
    return;
  }

  if (passLength <8 || passLength > 128) {
    window.alert("Password must be between 8 and 128 characters long");
    return;
  }

  
  
  passSpecial = window.confirm("Click OK to if you would like to include special characters in your password");
  passNumbers = window.confirm("Click OK to if you would like to include number characters in your password");
  passLowercase = window.confirm("Click OK to if you would like to include lowercase characters in your password");
  passUppercase = window.confirm("Click OK to if you would like to include uppercase characters in your password");

  if (passSpecial === false && passNumbers === false && passLowercase === false && passUppercase === false) {
    window.alert("You must select at least one character type to include in the password");
    return;
  }

  var password = "";
  const acceptableChars =[];

  if (passSpecial) {
    acceptableChars.push(specialCharacters.split(""));
  }

  if (passNumbers) {
    acceptableChars.push(numbers.split(""));
  }

  if (passLowercase) {
    acceptableChars.push(lowercaseLetters.split(""));
  }

  if (passUppercase) {
    acceptableChars.push(uppercaseLetters.split(""));
  }

  for (var i = 0; i< passLength; i++) {
    var randomCharacter = acceptableChars[(Math.floor(Math.random() * acceptableChars.length))];
    password += randomCharacter[Math.floor(Math.random() * randomCharacter.length)];
  }

  return password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
