// const array = [1, 9, 17, 22];
// let sum = 0 ;
// for(let i = 0; i < array.length; i++){
//   const elements = array[i];
//   sum = sum + elements
// };
// console.log(sum);

// const addtion = array.reduce((acc, cur) => acc + cur ,0);
// console.log(addtion);

const people = [
  {name: 'Meena', age: 20},
  {name: 'Rina', age: 15},
  {name: 'Meena', age: 22},
];

// let sum = 0;
// for(let i = 0; i < people.length; i++){
//   const element = people[i];
//   sum += element.age;
  
// }
// console.log(sum);

const sum = people.reduce((total, people) =>{
  return total + people.age;
},0)
console.log(sum);


