//function constructors
function Person(name,age,height){
    this.name=name;
    this.age=age;
    this.height=height;
    this.greet()=function(){
        console.log("Hello there");
    }
};

//creating instances from constructors
let person=new Person("Grace",15,"4ft");
person.food="chapo";    //adding new property
console.log({person});

let person2=new Person("Ann",25,"5ft")
console.log(person2);

//adding properties in the constructor and person and person2 will also be added
Person.prototype.weight=50;
console.log({person});
console.log(person.weight);                 //weight is found in the prototype
// overiding weight
person2.weight=60;
console.log({person2});
console.log("weight",person2.weight);
console.log(person.weight);
console.log(person instanceof Person);     //to check if person is an instance of Person returns true if so




