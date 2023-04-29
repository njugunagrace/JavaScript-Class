let a =20; //global variable accessed everywhere
function add(b){
    console.log(a+b)
}
add(20);
let aa =20; //global variable accessed everywhere

let y=20;
function addition(z){
    console.log(y+z+c)
    let c = 30; //local variable-accessible in the scope defined
    console.log(c)

}
add(20);
console.log({y})

function greet(){
    let hello ="hey";    //it is a global fuction of talk
    function talk(){   //it is a local fuction inside greet
        let greeting = "hello there"
        console.log(`${hello} ${greeting}`)  
    }
    talk()
}
greet()
