//  If we list all the natural numbers below 10 that are multiples of 3 or 5,
// we get 3, 5, 6 and 9. The sum of these multiples is 23.
// Find the sum of all the multiples of 3 or 5 below 1000.

var sum = 0;

for(var num = 0; num < 1000; num++){
  if ((num % 3 === 0) || (num % 5 === 0 )){
    sum += num
  }
}

// alternative solution similar to the ruby way using reduce 

var storage = []

for( var number = 0; number < 1000; number ++){
  if (number % 3 === 0 || number % 5 === 0){
     storage.push(number);
  }

}

storage.reduce(function(acc, val) {
  return acc + val;
}, 0)

// Answer: 233168
