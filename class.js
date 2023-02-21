class Instructor{
  name;
  designation = 'Web Course Instructor';
  team = 'Web team';
  location;
  constructor(name, location, team,){
    this.name = name;
    this.location = location;
    this.team = team;
  }
  satartSupportSesstion(time){
    console.log(`start the support sesion at ${time}`)
  };
  createQuiz(module){
    console.log(`Please Create Quaiz for module ${module}`)
  }

};

const amir = new Instructor('amir', 'Netrokona');
console.log(amir);
amir.satartSupportSesstion('9.00');
amir.createQuiz(60);

const solaiman = new Instructor('solaiman', 'Dhaka', 'web')
console.log(solaiman);

class Vehicle {
  constructor(name, meadIn, model, color){
    this.name = name;
    this.meadIn = meadIn;
    this.model = model;
    this.color = color;
  }
 
};

const car = new Vehicle("Toyota", "japan", "Corola", "Black");
console.log(car);
const vehicles = new Vehicle('Runar', 'BanglaDesh', 'Md78', 'Red');
console.log(vehicles);