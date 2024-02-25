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
  function getPasswordOptions() {

  //Prompting the user for password length
  var length = parseInt(prompt("Enter the length of the passowrd (between 8 and 128 characters."));

  //Prompting the passsword length
  if (isNaN(length) || length < 8 || length > 128)  {
    alert("Please enter a valie password length between 8 and 128 characters.");
    return null;
  }

  // Prompting user for the character to be used in the password
  var includeLowerCase = confirm("Do you want to include lowercase letters in the password?");
  var includeUpperCase = confirm("Do you want to include uppercase letters in the password?");
  var includeNumbers = confirm("Do you want to include numbers in the password?");
  var includeSpecialChars= confirm("Do you want to include special characters in the password?")

  // Validating at least one character type is selected for the password
  if (!includeLowerCase && !includeUpperCase && !includeNumbers && includeSpecialChars)  {
    alert("Please select at least one character type for the password")
  }
  }
  
  // Function for getting a random element from an array
  function getRandom(arr) {
  return arr[Math.floor(Math.random() * arr.length)]
  }
  
  // Function to generate password with user input
  function generatePassword() {
  var options = getPasswordOptions(); 
  if (!options) return ""; // If user cancels or inputs are invalid, return an empty string

  var password = "";
  var allChars = [];
  var chosenChars = [];

  if (options.includeLowerCase)  {
    allChars = allChars.concat("abcdefghijklmnopqrstuvwxyz".split(""));
    chosenChars.push(getRandom("abcdefghijklmnopqrstuvwxyz".split("")));
  }

  if (options.includeUpperCase)  {
    allChars = allChars.concat("ABCDEFGHIJKLMNOPQRSTUVWXYZ".split(""));
    chosenChars.push(getRandom("ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("")));
  }

  if (options.includeNumbers)  {
    allChars = allChars.concat("0123456789".split(""));
    chosenChars.push(getRandom("0123456789".split("")));
  }

  if (options.includeSpecialChars)  {
    allChars = allChars.concat("@%+\\/'!#$^?:,(){}[]~-_.".split(""));
    chosenChars.push(getRandom("@%+\\/'!#$^?:,(){}[]~-".split("")));
  }

// Ensure at least one character from each selected character type is included
for (var i = 0; i < chosenChars.length; i++)  {
    password += chosenChars[i];
}

// Generate the rest of the password randomly
for (var i = chosenChars.length; i < options.length; i++)  {
    passwrod += getRandom(allChars);
}

// Shuffle the password to mix the characters
password = password.split("").sort(function () {
return 0.5 - Math.random();
}).join("");

//return password;
return options;
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