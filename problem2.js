const numbers = [33, 50, 79, 78, 90, 101, 30];

const divisible = numbers.filter(nums => nums % 10 === 0);
console.log(divisible);
const divisible10 = numbers.find(number => number % 10 === 0);
console.log(divisible10);