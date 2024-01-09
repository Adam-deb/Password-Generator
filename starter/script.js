// Array of special characters to be included in password
var specialCharacters = [
  '@',
  '%',
  '+',
  '\\',
  '/',
  "'",
  '!',
  '#',
  '$',
  '^',
  '?',
  ':',
  ',',
  ')',
  '(',
  '}',
  '{',
  ']',
  '[',
  '~',
  '-',
  '_',
  '.'
];

// Array of numeric characters to be included in password
var numericCharacters = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];

// Array of lowercase characters to be included in password
var lowerCasedCharacters = [
  'a',
  'b',
  'c',
  'd',
  'e',
  'f',
  'g',
  'h',
  'i',
  'j',
  'k',
  'l',
  'm',
  'n',
  'o',
  'p',
  'q',
  'r',
  's',
  't',
  'u',
  'v',
  'w',
  'x',
  'y',
  'z'
];

// Array of uppercase characters to be included in password
var upperCasedCharacters = [
  'A',
  'B',
  'C',
  'D',
  'E',
  'F',
  'G',
  'H',
  'I',
  'J',
  'K',
  'L',
  'M',
  'N',
  'O',
  'P',
  'Q',
  'R',
  'S',
  'T',
  'U',
  'V',
  'W',
  'X',
  'Y',
  'Z'
];

// Function to prompt user for password options

var passwordLength
var lowercaseSeL
var uppercaseSeL
var numericSeL
var specialSeL

function getPasswordOptions() {
  determineLength()
  charType()
}

function determineLength() {
  passwordLength = prompt("How long do you want your password to be (enter a number between 8 and 128)");
    if(passwordLength < 8 || passwordLength > 128 || passwordLength === isNaN){
      alert("You have entered an invalid length for your password (should be 8-228")
      determineLength();
    }
    else{
      alert("You will now select which character types you would like to include in your password\nPlease select at least one character type!")
      return passwordLength
    }
}

function charType(){

  function determineLowercase(){
    lowercaseSeL = prompt(`Do you want lowercase characters in your password?`);
    lowercaseSeL = lowercaseSeL.toLowerCase();
      if(lowercaseSeL === "yes"){
        return lowercaseSeL = true
      } 
      else if(lowercaseSeL === "no"){
        return lowercaseSeL = false
      }
      else{
        alert("please enter yes or no")
        determineLowercase()
      }
  }


  function determineUppercase(){
    uppercaseSeL = prompt(`Do you want uppercase characters in your password?`);
    uppercaseSeL = uppercaseSeL.toLowerCase();
      if(uppercaseSeL === "yes"){
        return uppercaseSeL = true
      } 
      else if(uppercaseSeL === "no"){
        return uppercaseSeL = false
      }
      else{
        alert("please enter yes or no")
        determineUppercase()
      }
  }

  function determineNumeric(){
    numericSeL = prompt(`Do you want numeric characters in your password?`);
    numericSeL = numericSeL.toLowerCase();
      if(numericSeL === "yes"){
        return numericSeL = true
      } 
      else if(numericSeL === "no"){
        return numericSeL = false
      }
      else{
        alert("please enter yes or no")
        determineNumeric()
      }
  }

  function determineSpecial(){
    specialSeL = prompt(`Do you want special characters in your password?`);
    specialSeL = specialSeL.toLowerCase();
      if(specialSeL === "yes"){
        return specialSeL = true
      } 
      else if(specialSeL === "no"){
        return specialSeL = false
      }
      else{
        alert("please enter yes or no")
        determineSpecial()
      }
  }

  determineLowercase()
  determineUppercase()
  determineNumeric()
  determineSpecial()
  if(!lowercaseSeL && !uppercaseSeL && !numericSeL && !specialSeL){
    alert("please select at least one character type");
    charType();
  };
}

getPasswordOptions()

// Function for getting a random element from an array
function getRandom(arr) {
  return arr[Math.floor(Math.random() * arr.length)]
}

// Creating array to store responses of user to which characters they want in the password

var charSeLarr = []

if(lowercaseSeL){
  charSeLarr[0] = lowerCasedCharacters
}

if(uppercaseSeL){
  charSeLarr[1] = upperCasedCharacters
}

if(specialSeL){
  charSeLarr[2] = specialCharacters
}

if(numericSeL){
  charSeLarr[3] = numericCharacters 
}

passChar = charSeLarr.flat(1)

// Function to generate password with user input

function generatePassword(){ 

blankPass = []

for(var i=0; i<passwordLength; i++){
  var allChoices = getRandom(passChar)
  blankPass.push(allChoices)
}

var password = blankPass.join("");
console.log("Your Pasword is: " + password);
return password
}

// Get references to the #generate element
var generateBtn = document.querySelector('#generate');

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector('#password');

  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener('click', writePassword);