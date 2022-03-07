// Assignment Code
var generateBtn = document.querySelector("#generate");


function generatePassword() {
  var lowerCaseCharacters = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];
  var upperCaseCharacters = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"];
  var numericalCharacters = ["0","1","2","3","4","5","6","7","8","9"]
  var specialCharacter = ["~","`","!","@","#","$","%","^","&","*","(",")","_","-","+","=","{","[","}","]","|",":",";","<",">",".","?",","]
  var password = []
  var passwordLength = window.prompt ("what length would you like your pasword between 8 and 128")

  if (passwordLength < 8 || passwordLength > 128) {
    window.alert ("Please try again and choose a number between 8 and 128.");
    return;
  }

  var lowerCase = window.confirm ("Do you want to include Lowercase characters?");
  var upperCase = window.confirm ("Do you want to include Uppercase characters?");
  var numerical = window.confirm ("Do you want to include Numerical characters?");
  var special = window.confirm ("Do you want to include special characters?");
    
  console.log (lowerCase)
  console.log (upperCase)
  console.log (numerical)
  console.log (special)
    
  var characters = []
  // If none of the options where chosen it resets
  if (!lowerCase && !upperCase && !numerical && !special) {
    window.alert ("Please try again with at least one type of character");
    return;
  }
  //if any of the options is true it adds it to the array and increases the string length
  if (lowerCase) {
      characters = characters.concat(lowerCaseCharacters);
  } 

  console.log(characters)

  if (upperCase) {
    characters = characters.concat(upperCaseCharacters);
  } 
  
  console.log(characters)
  
  if (numerical) {
    characters = characters.concat(numericalCharacters);
  } 
  
  console.log(characters)
  
  if (special) {
    characters = characters.concat(specialCharacter);
  } 

  console.log (characters)
  console.log (characters.length)
    
  //loop increases by 1 until it reaches the required passwordlength set by customer
  // a random number is obtained which refers to one of the characters in the string of characters the customer chose
  //each character is then added to the passwork array
  for (let i = 0; i < passwordLength; i++) {
    var index = Math.floor(Math.random() * characters.length)
    console.log(characters[index])
    password[i]=characters[index]
    console.log (password)
  }
  let passwordString = password.join("")
  return passwordString;
}   



// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  console.log (password)
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
