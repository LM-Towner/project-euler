// The sum of the squares of the first ten natural numbers is,
//
// 12 + 22 + ... + 102 = 385
// The square of the sum of the first ten natural numbers is,
//
// (1 + 2 + ... + 10)2 = 552 = 3025
// Hence the difference between the sum of the squares of the first ten
//  natural numbers and the square of the sum is 3025 − 385 = 2640.
//
// Find the difference between the sum of the squares of the first one
// hundred natural numbers and the square of the sum.

var sumOfSquares = 0;
for(var num = 0; num <= 100; num++){
  sumOfSquares += Math.pow(num, 2)
};

var sum = 0;
for(var num= 0; num <= 100; num++){
squareOfSum = Math.pow((sum += num), 2);
}

console.log(squareOfSum - sumOfSquares );
