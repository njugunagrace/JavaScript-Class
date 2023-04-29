let x = " Grace ";
let y = x.length;
let a = "Wambuui is my name";
let b = x.concat(a);
console.log(b);
console.log(y);
console.log(`${x} has a length of ${x.length}`);
console.log(x[1]);
console.log(a.slice(1,4));
console.log(a.toLowerCase());
console.log(a.replace("u","a"));
// regular expression can also be taken in the replace method
console.log(a.replace(/u/g,"a"));
console.log(x.split(""));
console.log(x.trim());
console.log(x.includes("z"));
console.log(x!==a);
//to convert a string into a number
let numb = "30"
console.log(+numb);
//to convert a numb into a string 
console.log(numb.toString());
// convert a JavaScript string to an array of characters?
let z = "Graycie";
let w = [...z];
console.log(w);
//or
console.log(z.split(""));
//or
console.log(Array.from(z));
console.log(z.endsWith("e"));
//reverse
// let newSring = "";
// let i = z.length-1
// for(i>=0){
//     i --
//     newString += str[i];

// }
// return newSring
let newString = "";
for (let i = z.length - 1; i >= 0; i--) {
    newString += z[i];
}
return newString;













