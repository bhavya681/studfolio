// src/utils/passwordUtils.js
export const generatePassword = ({
    length,
    includeNumbers,
    includeUppercase,
    includeLowercase,
    includeSpecialChars,
  }) => {
    const numbers = "0123456789";
    const uppercaseLetters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    const lowercaseLetters = "abcdefghijklmnopqrstuvwxyz";
    const specialChars = "!@#$%^&*()-_=+[]{}|;:'\",.<>?/`~";
  
    let characterPool = "";
    if (includeNumbers) characterPool += numbers;
    if (includeUppercase) characterPool += uppercaseLetters;
    if (includeLowercase) characterPool += lowercaseLetters;
    if (includeSpecialChars) characterPool += specialChars;
  
    if (!characterPool) return "";
  
    let password = "";
    for (let i = 0; i < length; i++) {
      const randomIndex = Math.floor(Math.random() * characterPool.length);
      password += characterPool[randomIndex];
    }
  
    return password;
  };
  