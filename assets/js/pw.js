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
  var length = parseInt(prompt("Enter the length of the passowrd (between 8 and 128 characters.)"));

  //Prompting the passsword length
  if (isNaN(length) || length < 8 || length > 128)  {
    alert("Please enter a valid password length between 8 and 128 characters.");
    return null;
  }

  // Prompting user for the character to be used in the password
  var includeLowerCase = confirm("Do you want to include lowercase letters in the password?");
  var includeUpperCase = confirm("Do you want to include uppercase letters in the password?");
  var includeNumbers = confirm("Do you want to include numbers in the password?");
  var includeSpecialChars= confirm("Do you want to include special characters in the password?")

  // Validating at least one character type is selected for the password
  if (!includeLowerCase && !includeUpperCase && !includeNumbers && includeSpecialChars)  {
    alert("Please select at least one character type for the password");
  return null;
  }
  
//Returning an object containing all the options
return  {
  length: length,
  includeLowerCase: includeLowerCase,
  includeUpperCase: includeUpperCase,
  includeNumbers: includeNumbers,
  includeSpecialChars: includeSpecialChars,
}
  }

  // Function to generate password with user input
  function generatePassword() {
  var options = getPasswordOptions(); 
  if (!options) return ""; // If user cancels or inputs are invalid, return an empty string
console.log(options);
  var password = "";
  var chosenChars = [];

  if (options.includeLowerCase)  {
    chosenChars = chosenChars.concat(lowerCasedCharacters);
            // Console Log
console.log(chosenChars);
  }

  if (options.includeUpperCase)  {
    chosenChars = chosenChars.concat(upperCasedCharacters);
            // Console Log
console.log(chosenChars);
  }

  if (options.includeNumbers)  {
    chosenChars = chosenChars.concat(numericCharacters);
            // Console Log
console.log(chosenChars);
  }

  if (options.includeSpecialChars)  {
    chosenChars = chosenChars.concat(specialCharacters);
        // Console Log
console.log(chosenChars);
  }

// Ensure at least one character from each selected character type is included
for (var i = 0; i < options.length; i++)  {
    password += chosenChars[Math.floor(Math.random() * chosenChars.length)];
}

//return password;
return password;
}
  // Get references to the #generate element
  var generateBtn = document.querySelector('#generate');
  
  // Write password to the #password input
  function writePassword() {
    var password = generatePassword();
    var passwordText = document.querySelector('#password');
  // Console Log
  console.log(passwordText);

    passwordText.value = password;
        // Console Log
console.log(password);
  }
  
  // Add event listener to generate button
  generateBtn.addEventListener('click', writePassword);