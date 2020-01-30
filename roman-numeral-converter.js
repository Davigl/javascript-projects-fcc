/*
Convert the given number into a roman numeral.

All roman numerals answers should be provided in upper-case.
*/

/**
 * Count how many roman letters it is possible to insert.
 *
 * @param {string} number current number;
 * @param {number} mod roman mod.
 */

const countRoman = (number, mod) => {
  let output = Math.floor(number / mod);

  return output;
};

/**
 * Insert romans letters.
 *
 * @param {string} roman current roman string;
 * @param {number} number current number;
 * @param {string} letter letter you want to insert;
 * @param {number} mod roman mod.
 */

const getRoman = (roman, number, letter, mod) => {
  let output = roman.concat(letter.repeat(countRoman(number, mod)));

  return output;
};

/**
 * Main Method.
 *
 * @param {number} number number to be converted to roman.
 */

function convertToRoman(number) {
  let roman = "";

  roman = getRoman(roman, number, "M", 1000);
  number %= 1000;
  roman = getRoman(roman, number, "CM", 900);
  number %= 900;
  roman = getRoman(roman, number, "D", 500);
  number %= 500;
  roman = getRoman(roman, number, "CD", 400);
  number %= 400;
  roman = getRoman(roman, number, "C", 100);
  number %= 100;
  roman = getRoman(roman, number, "XC", 90);
  number %= 90;
  roman = getRoman(roman, number, "L", 50);
  number %= 50;
  roman = getRoman(roman, number, "XL", 40);
  number %= 40;
  roman = getRoman(roman, number, "X", 10);
  number %= 10;
  roman = getRoman(roman, number, "IX", 9);
  number %= 9;
  roman = getRoman(roman, number, "V", 5);
  number %= 5;
  roman = getRoman(roman, number, "IV", 4);
  number %= 4;
  roman = getRoman(roman, number, "I", 1);

  return roman;
}

console.log(convertToRoman(9));
