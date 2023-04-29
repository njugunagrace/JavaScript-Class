let student ={
    name: "Steven",
    age:19,
    greet:function(){
        console.log("Hello");
    }
};

student.greet();
student.talk=function(){
    console.log("Hello there");
    console.log(`Hello ,My name is ${student.name} and I am ${student.age} years old`);
    console.log(`Hello ,My name is ${this.name} and I am ${this.age} years old`);
};
student.talk();

//keyword this cannot be used in arrow functions

console.log(`Hello ,my name is  ${student.name} and I am ${student.age} years old`);