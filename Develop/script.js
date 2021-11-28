// Assignment code here

// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

function generatePassword() {
  console.log("Hey you clicked the button");
// 1. prompts user for password criteria

//    a. password length 8 > 128 characters
//    b. lowercase, uppercase, numbers, special characters
// 2. Validate the input.
// 3. Generate password based on inputs
// 4. Display password to the page. 
  return "Password Placeholder";
}

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);


// writePassword();
