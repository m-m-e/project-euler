const answerBox = document.querySelector('.answer');
const FN = [1, 2];
let evenNumbers = [];
let sumOfNumbers = 0;

const findFibonacciNumbers = array => {
  while (array[array.length - 1] < 4000000) {
    let fibonacciSum;
    const lastNumber = array[array.length - 1];
    const penultimateNumber = array[array.length - 2];
    fibonacciSum = lastNumber + penultimateNumber;
    array.push(fibonacciSum);
  }

  if (array[array.length - 1] > 4000000) {
    array.pop();
  }
}

const findEvenNumbers = array => {
  evenNumbers = array.filter(number => number % 2 === 0);
  return evenNumbers;
}

const addNumbers = array => {
  for (number of array) {
    sumOfNumbers += number;
  }
  return sumOfNumbers;
}

const addEvenFibonacciNumbers = () => {
  findFibonacciNumbers(FN);
  findEvenNumbers(FN);
  addNumbers(evenNumbers);
  answerBox.innerHTML = sumOfNumbers;
}

addEvenFibonacciNumbers();


