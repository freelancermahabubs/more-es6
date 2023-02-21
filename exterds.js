class TeamMember{
  name;
  location;
  constructor(name, location){
    this.name = name;
    this.location = location;
  }
  provideFeedback(){
    console.log(`${this.name} thank you for your feedback.`)
  }
}
class Instructor extends TeamMember{
  designation = 'Web Course Instructor';
  team = 'Web team';
  constructor(name, location){
    super(name, location)
  }
  satartSupportSesstion(time){
    console.log(`start the support sesion at ${time}`)
  };
  createQuiz(module){
    console.log(`Please Create Quaiz for module ${module}`)
  };
  provideFeedback(){
    console.log(`${this.name} thank you for your feedback.`)
  }
};


class Developer extends TeamMember{
  designation = 'Web Course Instructor';
  team = 'Web team';
  tech;
  constructor(name, location, tech){
    super(name, location);
    this.tech = tech;
    
  }
  developFeature(feature){
    console.log(`Plase Develop the ${feature}`)
  };
  release(version){
    console.log(`Please release the version ${version}`)
  };

};


class JobPlacement extends TeamMember{
  designation = 'Job Placement Commandos';
  team = 'Job Placement';
  region;
  constructor(name, location, region){
    super(name, location)
    this.region = region;
    
  }
  provideResume(feature){
    console.log(`Plase Develop the ${feature}`)
  };
  prepareStudent(version){
    console.log(`Please release the version ${version}`)
  };

};

const alia = new Developer('Alia Bhatt', 'Dhaka', 'React');
console.log(alia);
alia.provideFeedback();

const mahabub = new JobPlacement('Mahabub', 'Netrokona', 'BanglaDesh');
console.log(mahabub);