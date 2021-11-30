// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

function generatePassword() {
  // 1. prompts user for password criteria
  var confirmLength = parseInt(window.prompt(
    "Choose the character length of your password (enter in a number between 8 to 128)"
  ));
  
  console.log(confirmLength);

  // Possible password values
  let values = "";
  let password = "";

  //    a. password length 8 > 128 characters. has to be a #
    if (confirmLength === "" || confirmLength === null 
    || confirmLength < 8 || confirmLength > 128 
    || Number.isNaN(confirmLength))
    {
      window.alert("Please choose a number between 8 up to 128");
      return generatePassword();
    }
//    b. lowercase, uppercase, numbers, special characters
    else {
      confirmNumber = window.prompt ("Would you like to include numbers in your password? Click OK for YES, CANCEL for NO");
      confirmLowercase = window.prompt ("Would you like to include lowercased characters? Click OK for YES, CANCEL for NO" );
      confirmUppercase = window.prompt ("Would you like to include UPPERCASED characters? Click OK for YES, CANCEL for NO");
      confirmCharacter = window.prompt ("Would you like to have special characters included? Click OK for YES, CANCEL for NO");
    }
// 2. Validate the input.
    if (confirmCharacter){
     var characterList = "!@#$%^&*()"
    }
// 3. Generate password based on inputs
    for (var i = 0; i <=confirmLength; i++){
      let randomCharacterIndex = Math.floor(Math.random() * characterList.length);
      // add another var to 38
      var newvalue = characterList[randomCharacterIndex];
    }
// 4. Display password to the page. 
  return password;
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
