const users = [
  {id: 1, name: "Abul", Job: "Doctor"}
];
console.log(users[0].name);
const data = {
  count: 500,
  data: [
    {id: 1, name: "Mahabub", Job: "Web Developer"},
    {id: 2, name: "Mashud", Job: "Web Developer"},
  ]
};

const firstJob = data.data[0].Job;
// console.log(data.data[0].Job);


// const data = {
//   count: 5000,
//   data: [
//     {id: 1, Name: "JIbon", Propesion: "Student"},
//     {id: 2, Name: "Mahabub", Propesion: "Developer"},
//     {id: 3, Name: "Kalam", Propesion: "Polar"},
//   ]
// };
// console.log(data.data[2].Name);

const user = {
  id: 500,
  name: "Thomas Alba Edison",
  address: {
    street: {
      first: '35/A Netrokona Court Setation',
      second: 'Third Floor',
      third: 'right side'
    },
    postOffice: 'Netrokona Sadar',
    city: 'Netrokona',
  }
};

const userFloor = user.address?.street.second;
console.log(userFloor);
