// Assignment code here
// Get references to the #generate element
// Setting options for available characters
const letters = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
const upperCaseLetters = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
const numbers = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"]
const symbols = ["!", "@", "#", "$", "%", "^", "&", "*"]
var generateBtn = document.querySelector("#pwButton");


// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);


function pwVariables() {

  var characterLength = prompt("Please choose between 8 and 128 characters");

  if (characterLength < 8 || characterLength > 128) {
    alert("Please select a number between 8 and 128.")
    return
  }
// Getting password parameters
  var askForNumbers = confirm("Do you want your password to include numbers?");
  var askForLowerCase = confirm("Do you want to have lower-case letters?");
  var askForUpperCase = confirm("Do you want to have upper-case letters?");
  var askSymbols = confirm("Do you want to include symbols or special characters?");
  if (askForNumbers === false && askForLowerCase === false && askForUpperCase === false && askSymbols === false) {
    alert("Please select at least one option")
    return
  }


  var responses = {
    characterLength: characterLength,
    askForLowerCase: askForLowerCase,
    askforUpperCase: askForUpperCase,
    askSymbols: askSymbols,
    askForNumbers: askForNumbers
  }

  return responses;
}
// Creating function to generate random characters based on user-choice.
function generatePassword() {

  var responses = pwVariables();

  var userChoices = [];
  if (responses.askForLowerCase === true) {
    userChoices = userChoices.concat(letters)
  }
  if (responses.askForUpperCase === true) {
    userChoices = userChoices.concat(upperCaseLetters)
  }
  if (responses.askSymbols === true) {
    userChoices = userChoices.concat(symbols)
  }
  if (responses.askForNumbers === true) {
    userChoices = userChoices.concat(numbers)
  }

  var password = []

  for (var i = 0; i < responses.characterLength; i++) {
    var index = Math.floor(Math.random() * userChoices.length);
    password.push(userChoices[index])
  }

// Displaying PW
  return password.join("");

}


// console.log(pwVariables())


