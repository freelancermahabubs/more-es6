const student = {
  name: 'Fredie',
  age: 26,
};
const age = student.age;
console.log(age);

let data = {
  location: [
    {
      latitude: '34.5, 37.8',
      longitude: '98.77, 58.7', 
      city: 'Hyderabad', 
      country: 'India' 
    }
  ]
};
// const city = data.location[0]["city"];
// console.log(city);

// const city = data.location.map(x => x.city);
// console.log(city);

const user = {
  id: 1,
  name: "Leanne Graham",
  username: "Bret",
  email: "Sincere@april.biz",
  address: {
    street: "Kulas Light",
    suite: "Apt. 556",
    city: "Gwenborough",
    zipcode: "92998-3874",
    geo: {
      lat: "-37.3159",
      lng: "81.1496"
    }
  },
  phone: "1-770-736-8031 x56442",
  website: "hildegard.org",
  company: {
    name: "Romaguera-Crona",
    catchPhrase: "Multi-layered client-server neural-net",
    bs: "harness real-time e-markets"
  }
};
const email = user.email;
console.log(email);
const address = user.address;
console.log(address);
const city = user.address['city'];
console.log(city);
const lat = user.address["geo"]['lng'];
console.log(lat);

const companyName = user.company.name;
console.log(companyName);
const bs = user.company.bs;
console.log(bs)

