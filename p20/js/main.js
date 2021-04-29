const answerBox = document.querySelector(".answer");

const findFactorial = n => (n !== 1) ? n * findFactorial(n-1) : n;

const factorial = findFactorial(100)
console.log(factorial);

/*const findSumOfFactorial = number => {
  let total = 0;
  const numberAsArray = number.toString().split("");
  for (let i = 0; (i < numberAsArray.length) ; i++) {
    total += parseInt(numberAsArray[i]);
  }
  return total;
}

const sum = findSumOfFactorial(factorial);
console.log(sum);


answerBox.innerHTML */