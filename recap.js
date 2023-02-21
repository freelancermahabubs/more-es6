const numbers = [141, 56, 65, 65];
// numbers = 45;
let salary = 450;
salary = 455;

function calculateSalary(salary, tax = 0.25, bonus = 0){
  const remaining = salary - salary*tax;
  const total = remaining + bonus;
  return total;
};

const elementHTML = `
<div>
  <h3>Name: </h3>
  <p>Address: </p>
  <p>Salary: ${calculateSalary(10000, 0, 0)} </p>
  <p>Others: ${numbers[2]} </p>
</div>
`;
const doubleIt = x => x * 2;
const calculateSalary2 = (salary, text, bonus) => salary - salary * text + bonus;

const ages = [11, 13, 14, 15, 16, 17];
const newAges = [...ages, 455, 412, 4];

const {x, y, z, ...c} = {x: 45, y: 12, z: 33, name: 'mahabub', salary: 50000};
const [a, b, ...r] = [14, 45, 85, 47, 25, 69];