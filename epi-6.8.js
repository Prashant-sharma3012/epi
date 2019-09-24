// takes an integer argument and returns array of primes

let isItPrime = (num, set) => {
  if (set[num]) {
    for (let k = 2; k <= Math.sqrt(num); k++) {
      if (num % k === 0) {
        return false;
      }
    }
    return true;
  }
  return false;
}

let getAllPrimes = (num) => {
  let result = []
  let isPrime = Array(num).fill(1);
  isPrime[0] = isPrime[1] = 0;

  for (i = 2; i < num; i++) {
    if (isItPrime(i, isPrime)) {
      // mark multiples
      for (j = 2; j < num; j++) {
        isPrime[j * i] = 0;
      }

      // add to result
      result.push(i);
    }
  }
  return result;
}

getAllPrimes(18)