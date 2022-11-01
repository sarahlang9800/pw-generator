// Assignment code here
function checkNumber(passwordLength) {
  var number = Number(passwordLength)
  if (!isNaN(number) && Number.isInteger(number)) {
    return true
  }
  return false
}

function generatePassword() {
  var isInteger
  do {
    var passwordLength = prompt("How long would you like your new password to be?")
    isInteger = checkNumber(passwordLength)
    if (!isInteger) {
      window.alert("Input is invalad please enter a whole number");
      generatePassword()
    }
  } while (!isInteger)

  // Returns a number of at least 8 characters and no more than 128 characters!!!!
  while (passwordLength < 8 || passwordLength > 128) {
    window.alert("The password must be an integer between 8 and 128 characters.");
    generatePassword()
  }

  var input = [];
  var password = [];

  var symbols = ["!", "@", "#", "$", "%", "&", "*", "(", ")", ".", "_", "+", "-", "=", "[", "]", "{", "}", "/", ":", ";", "<", ">", "?"];
  var numbers = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
  var upperCase = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
  var lowerCase = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];

  // Input is validated and at least one character type MUST be selected
  function mergeArrays(arr1, arr2) {
    for (var i = 0; i < arr2.length; i++) {
      arr1.push(arr2[i])
    }
  }

  var hasSymbols = window.confirm("Use symbols?");
  if (hasSymbols) {
    mergeArrays(input, symbols)
  }

  var hasNumbers = window.confirm("Use numbers?");
  if (hasNumbers) {
    mergeArrays(input, numbers)
  }

  var hasUpperCase = window.confirm("Use upper case?");
  if (hasUpperCase) {
    mergeArrays(input, upperCase)
  }

  var hasLowerCase = window.confirm("Use lower case?");
  if (hasLowerCase) {
    mergeArrays(input, lowerCase)
  }

  for (let i = 0; i < passwordLength; i++) {
    let randomNumber = Math.floor((Math.random() * input.length))
    password.push(input[randomNumber])
  }

  if (input.length > 0) {
    return password.join("");
  } else {
    window.alert("Must select at least one of the options!")
    generatePassword()
  }
}

// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
