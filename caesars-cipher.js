/*
One of the simplest and most widely known ciphers is a Caesar cipher, also known as a shift cipher. 
In a shift cipher the meanings of the letters are shifted by some set amount.

A common modern use is the ROT13 cipher, where the values of the letters are shifted by 13 places.
Thus 'A' ↔ 'N', 'B' ↔ 'O' and so on.

Write a function which takes a ROT13 encoded string as input and returns a decoded string.

All letters will be uppercase. Do not transform any non-alphabetic character 
(i.e. spaces, punctuation), but do pass them on.
*/

/**
 * It returns the corrected rotated charcode.
 *
 * @param {number} charCode letter ascii number
 */

const rotate = charCode => {
  let output = charCode;

  if (output > 90) {
    let rotatedChar = 64 + (output - 90);

    return rotatedChar;
  }

  return output;
};

/**
 * Main method.
 *
 * @param {} str string to be rotated.
 */

function rot13(str) {
  let regex = /[A-Z]/;
  let output = "";

  for (let i = 0; i < str.length; i++) {
    if (regex.test(str[i])) {
      let charCode = str[i].charCodeAt() + 13;

      output += String.fromCharCode(rotate(charCode));
    } else {
      output += str[i];
    }
  }

  return output;
}

console.log(rot13("SERR PBQR PNZC"));
