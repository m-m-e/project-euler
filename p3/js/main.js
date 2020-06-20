const answerBox = document.querySelector('.answer');
const factors = [];
const primeNumbers = [];

// Find factors
const findFactors = (number, array) => {
  for (let i = 1; i <= number; i++){
    if (number % i === 0){
      array.push(i);
    }
  }
  console.log(array);
  return array;
}

// Find prime numbers
const findPrimeNumbers = array => {
  for (number of array){
    if (number === 2){
      primeNumbers.push(number);
    } else {
      for(var i = 2; i < number; i++) {
        if(number % i === 0) {
            return false;
        }
      }
      primeNumbers.push(number);
      console.log(primeNumbers);
    }
  }
};

//Function to find biggest number
const findBiggestNumber = array => {
  const biggest = Math.max(...array);
  console.log(biggest);
}

// Find biggest prime factor

const findBiggestPrimeFactor = (number, factorsArray, primes) => {
  findFactors(number, factorsArray);
  findPrimeNumbers(factorsArray);
  findBiggestNumber(primes);
};

// findBiggestPrimeFactor(13195, factors, primeNumbers);

// 71 × 839 × 1471 × 6857


function largestPrimeFactor(n){
  var i=2;
  while (i<=n){
      if (n%i == 0){
          n/=i;
      }else{
          i++;
      }
  }
  return i;
}

const a = 600851475143 ;

answerBox.innerHTML = largestPrimeFactor(a);
