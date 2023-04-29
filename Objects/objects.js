//create an object

let person = {
    name:"Ann",
    age:20,
    friend:{
        name:"Amanda",
        age:24,
        myFriend:{
            name:"Susan",
            age:21
        }
    }
}

let person2=new Object();
person2.name="Grace";    //adding properties
// or adding via index person2["Grace"]
person2.age=30;
console.log(person2);
person.age=56;           //updating properties
console.log({person});

console.log(person.name);      //accessing name
console.log(person.friend.myFriend.name);     //accessing nested properties
console.log(person['friend']['myFriend']['name']);   //or using the index method

delete person.age
console.log({person});

let person3= Object.assign(person); //like cloning
console.log({person3});
let keys= Object.keys(person3);  //getting keys
console.log({keys});


