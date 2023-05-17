class Person{
    constructor(name,age,height){
        this.name=name;
        this.age=age;
        this.height=height;
    }
    greet(){                              //methods are written outside the constructor
        console.log("Hello");
    }
};
let grace= new Person("Grace",29,"5.1ft")
let person=new Person("Henry",26,"7ft");
console.log({grace});
console.log({person});

class Robot extends Person{
    constructor(name,age,height){
        super(name,age,height);
    }
}
let robot=new Robot("Elsa",3,"5ft");
console.log({robot});

class CrazyRobot extends Person{
    constructor(name,age,height,dominance){
        super(name,age,height);
        this.walk=true;             //doesnt have to be in the constructor as it already has a value
        this.height="7ft";
        this.dominance=dominance
    }
    world(){
        console.log(`I will ${this.dominance} the world`);
    }
}

let crazy=new CrazyRobot("Felix",8,"3ft","enslave");
console.log({crazy});
crazy.world();

class LovingRobot extends CrazyRobot{
    constructor(name,age,height,dominance){
        super(name,age,height,dominance);

    }
}
let loving=new LovingRobot("Amanda",5,"5ft","love");
console.log({loving});

