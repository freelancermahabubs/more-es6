const numbers = [1, 2, 3, 4, 5];
//.reduce(AccumulatorFunction, Initial Value)
// AccumulatorFunction Has use two Parameters

// const total = numbers.reduce((previous, current) => previous + current, 0);
const total = numbers.reduce((previous, current) => {
  console.log(previous, current)
 return previous + current},
  0);
console.log(total)