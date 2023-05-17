const countries = ["Kenya","Uganda","Tanzania","Rwanda"];
let x = 0;
while(x<countries.length){
    console.log(countries[x])
    x++
}
let count = countries.slice(1)
console.log(count)

const places = ["nakuru","nairobi"];
places.push("nyandarua");
console.log(places.toString());
places instanceof Array;

const places1 = ["nakuru","nairobi"];
places1.push("nyandarua");
console.log(places1.join("-"));

const places3 = ["nakuru","nairobi"];
places3.shift();
console.log(places3);

const places4 = ["nakuru","nairobi"];
places4[places4.length]="nyandaraua";
console.log(places4);


let places5 = ["nyeri"]
let places6 = places5.unshift("Nyeri")
console.log(places6);


const points = [40, 100, 1, 5, 25, 10];
points.sort(function(a, b){return a - b});
console.log(points)

const numb = [34,78,45,23,1,34,101];
numb.sort(function(x,y){return x-y});
console.log(numb)






