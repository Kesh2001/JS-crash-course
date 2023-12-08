var countries = ["india", "usa", "japan", "russia"];

var states= new Array("Raj", "Delhi", "mum", "assam");

console.log(states[2]);

console.log(states.length);

states[0]="Punj";
console.log(states);

var user=["KEs", "123@gmail.com", 3,34,true];
//yes arr in js can store multiple data types, but preferred not to
console.log(user);

user.pop(); //remove element from back
console.log(user);

user.unshift("NEW VAL");// add element at front

console.log(user);
user.shift();//remove element from front
console.log(user);

console.log(user.indexOf(3));//will give -1 if val not present

console.log(Array.from("Keshav"));// array.from converts passed string into array, splits it

var a=Array.from("KLMNO");

console.log(a);

// FILL AND FILTER
var testArr=[2,3,4,6,1,9,8];
console.log(testArr.fill(0));//turns all elements into the val entered

console.log(testArr.fill("h"));
testArr=[2,3,4,6,1,9,8];
console.log(testArr.fill("h", 2));
testArr=[2,3,4,6,1,9,8];
console.log(testArr.fill("h", 2, 5));// 3rd value is exclusive, 2nd is inclusive


const myN=[23,55,34,56,89];
const r=myN.filter((num)=>num!=55);// the passed element will be deleted, filter gives a new array, accepts callback
console.log(r);
console.log(r.filter((num)=>num>55));

// SLICE AND SPLICE
// In range, 1st val is always inclusove and 2nd is always exclusive

var u=["Ted","Tim","GOd", "Sam","Sor","Sood"];
console.log(u.slice(1,3));// will show 1 and 2

console.log(u.slice(1));// removes the element completely, slice cut off and dropped

u.splice(1,3,"hi");// starting point and then no. of values to remove
console.log(u);
u.splice(1,3,"hi","bye");
console.log(u);