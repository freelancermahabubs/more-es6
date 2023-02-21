const numbers = [12, 5, 23, 45, 11, 18, 9, 55, 61, 1];
const bigNums = numbers.filter(number => number > 20);
const tiny = numbers.filter(number => number < 10);
const even = numbers.filter(e => e % 2 === 0);
// console.log(bigNums);
// console.log(tiny);
// console.log(even);

const products = [
  {id: 1, name: 'Laptop', price: 44521},
  {id: 1, name: 'Mobile', price: 41110},
  {id: 1, name: 'Watch', price: 3550},
  {id: 1, name: 'Tablate', price: 2300},
];

// const expensive = products.filter(product => product.price > 100000);
// const expensive = products.filter(product => product.price > 100);
const expensive = products.filter(product => product.price < 100);

console.log(expensive);