const answerBox = document.querySelector(".answer");

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
          largestPalindrome = product;
        }
      }
    }
  }

  return largestPalindrome;
}

answerBox.innerHTML = findLargestPalindromeProduct();