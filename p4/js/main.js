// start at biggest 3-digit numbers
// multiply together and see if the product is a palindrome

const answerBox = document.querySelector(".answer");

// practice with 2-digit numbers first
/*const multiplyNumbers = (num1, num2) => num1 * num2;

const firstAndLastNumbersAreTheSame = numberAsArray => numberAsArray[0] === numberAsArray[numberAsArray.length-1];

const convertNumberToString = num => num.toString(10);

const isPalindromeNumber = number => {
  const arrayNumber = number.split("");
  const numbersMatch = firstAndLastNumbersAreTheSame(arrayNumber);
  if (numbersMatch) {
    const newNumberAsArray = number.split("").slice(1,(length-1));
    if(newNumberAsArray.length !== 0) {
      const newNumber = newNumberAsArray.join("");
      return isPalindromeNumber(newNumber);
    } else {
      return true;
     }
  } else {
    return false;
  }
}

const convertToStringAndDetermineIfPalindrome = number => isPalindromeNumber(convertNumberToString(number));*/

function isPalindrome(num) {
  return parseInt(String(num).split('').reverse().join('')) === num;
}

const number1 = 999;
const number2 = 100;

const findLargestPalindromeProduct = () => {
  var largestPalindrome = 0;
  var product;
  for (a = number1; a > number2; a--) {
    for (b = number1; b > number2; b--) {
      product = a * b;
      if (largestPalindrome < product) {
        if (isPalindrome(product)) {
          console.log(product);
          largestPalindrome = product;
        }
      }
    }
  }

  return largestPalindrome;
}

/*const findLargestPalindromeProduct = () => {
  const product = multiplyNumbers(number1, number2);
  const productIsAPalindrome = convertToStringAndDetermineIfPalindrome(product);

  if (!productIsAPalindrome) {
    number2 -= 1;
    return findLargestPalindromeProduct();
  } else {
    return product;
  }
}*/

answerBox.innerHTML = findLargestPalindromeProduct();