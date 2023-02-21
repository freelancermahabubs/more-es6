const oddNumbers = [1, 3, 5, 7, 9];
const evenNumber = [];

for(let i = 0; i < oddNumbers.length; i++){
  evenNumber.push(oddNumbers[i] +1);
}
// console.log(evenNumber);

const convertEven = oddNumbers.map(num => num + 1);

console.log(convertEven);