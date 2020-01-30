/*
Convert the given number into a roman numeral.

All roman numerals answers should be provided in upper-case.
*/

const getRoman = (number, n) => {
  let output = Math.floor(number / n);

  return output;
};

const setNumber = (number, mod) => {
  return number % mod;
};

const r = (roman, number, letter, mod) => {
  let output = roman.concat(letter.repeat(getRoman(number, mod)));

  return output;
};

function convertToRoman(number) {
  let roman = "";

  roman = r(roman, number, "M", 1000);
  number %= 1000;
  roman = r(roman, number, "CM", 900);
  number %= 900;
  roman = r(roman, number, "D", 500);
  number %= 500;
  roman = r(roman, number, "CD", 400);
  number %= 400;
  roman = r(roman, number, "C", 100);
  number %= 100;
  roman = r(roman, number, "XC", 90);
  number %= 90;
  roman = r(roman, number, "L", 50);
  number %= 50;
  roman = r(roman, number, "XL", 40);
  number %= 40;
  roman = r(roman, number, "X", 10);
  number %= 10;
  roman = r(roman, number, "IX", 9);
  number %= 9;
  roman = r(roman, number, "V", 5);
  number %= 9;
  roman = r(roman, number, "IV", 4);
  number %= 4;
  roman = roman.concat("I".repeat(number));

  console.log(number);

  return roman;
}

console.log(convertToRoman(9));
