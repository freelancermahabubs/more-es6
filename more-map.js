const numbers = [5, 2, 3, 5, 4, 7];
const half = numbers.map(n => n/2);
const thirds = numbers.map(x => x / 3);
// console.log(half);
// console.log(thirds);

const numberss = [4, 6, 8, 10];
// const output = []
// for(const number of numbers){
// const doubled = number * 2;
// output.push(doubled);

// }

const doubled = numberss.map(n => n * 2)
// console.log(doubled)

// console.log(output);

const friends = ["TOM Baby", "TOM Latam", "TOM Timpo", "TOM Solaiman"];
const firstLetters = friends.map(friend => friend[0]);
// console.log(firstLetters);
const nameLengths = friends.map(f => f.length);
// console.log(nameLengths);

const products = [
  {id: 1, name: 'Laptop', price: 44521},
  {id: 1, name: 'Mobile', price: 41110},
  {id: 1, name: 'Watch', price: 3550},
  {id: 1, name: 'Tablate', price: 2300},
];

// const items = products.map(product => console.log(product.price));
const items = products.map(product => product.name);
const prices = products.map(p => p.price);
console.log(items);
console.log(prices)

