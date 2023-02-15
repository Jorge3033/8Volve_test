
const findPrimes = (primesLength: number): number[] => {
  const primes: number[] = [];
  
  let counter = 1;
  while (primes.length < primesLength) {

    if (isPrime(counter)) primes.push(counter);
    counter++;
  }
  return primes;
};

const isPrime = (num: number): boolean => {
  //is Pair
  if( num % 2 === 0 ) return false;

  for (let i = 2; i < num; i++) {
    if (num % i === 0) {
      return false;
    }
  }
  return true;
}

console.log(findPrimes(6));