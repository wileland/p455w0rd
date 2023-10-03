var generateBtn = document.querySelector("#generate");

function generatePassword() {
    let passwordLength = parseInt(prompt('Enter password length (between 8 and 128):'));

    while (isNaN(passwordLength) || passwordLength < 8 || passwordLength > 128) {
        passwordLength = parseInt(prompt('Invalid. Enter password length (between 8 and 128):'));
    }

    const isLowercase = confirm('Include lowercase letters?');
    const isUppercase = confirm('Include uppercase letters?');
    const isNumeric = confirm('Include numbers?');
    const isSpecialChar = confirm('Include special characters?');

    if (!isLowercase && !isUppercase && !isNumeric && !isSpecialChar) {
        alert('At least one character type should be selected.');
        return "";
    }

    const lowercaseChars = 'abcdefghijklmnopqrstuvwxyz';
    const uppercaseChars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    const numericChars = '0123456789';
    const specialChars = '!@#$%^&*()-_=+[]{}|;:,.<>?/';

    let allChars = '';
    if (isLowercase) allChars += lowercaseChars;
    if (isUppercase) allChars += uppercaseChars;
    if (isNumeric) allChars += numericChars;
    if (isSpecialChar) allChars += specialChars;

    let generatedPassword = '';
    for (let i = 0; i < passwordLength; i++) {
        generatedPassword += allChars[Math.floor(Math.random() * allChars.length)];
    }

    return generatedPassword;
}

function writePassword() {
    var password = generatePassword();
    var passwordText = document.querySelector("#password");
    passwordText.value = password;
}

generateBtn.addEventListener("click", writePassword);
