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
    if (confirmLength === "" || confirmLength === null)
    {
      window.alert("Please choose a number between 8 up to 128");
      return generatePassword();

    } else if (confirmLength < 8 || confirmLength > 128)
    {
      // window.alert("Please choose a number between 8 up to 128");
      confirmLength = parseInt(window.alert("Please choose a number between 8 up to 128"));
      return generatePassword();
    }
//    b. lowercase, uppercase, numbers, special characters
    else {
      confirmNumber = window.prompt ("Would you like to include numbers in your password?");
      confirmLowercase = window.prompt ("Would you like to include lowercased characters?");
      confirmUppercase = window.prompt ("Would you like to include UPPERCASED characters?");
      confirmCharacter = window.prompt ("Would you like to have special characters included?");
    }
// 2. Validate the input.
    var passwordInfo = {
      number = confirmNumber,
      lowercase = confirmLowercase,
      uppercase = confirmUppercase,
      character = confirmCharacter
    }

// 3. Generate password based on inputs
    for (var i = 0; i <=passwordInfo; i++){
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
