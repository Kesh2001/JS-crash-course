var myMap=new Map();

myMap.set(1, "Uno");
myMap.set(2, "Dos");
myMap.set(3, "Tres");
myMap.set(4, "Cuatro");

console.log(myMap);// Map is not an object

// for(let key of myMap.keys()){
//     console.log(`Key is ${key}`);
// }
// for(let val of myMap.values()){
//     console.log(`Value is ${val}`);
// }

for(let [key,val] of myMap){
    console.log(`Key is ${key},Value is ${val}`);
}

myMap.forEach((key)=>console.log(`${key}`));
// foreach goes for the values, thinks of keys as indexes

myMap.forEach((key,val)=>console.log(`${key} and ${val}`));
//how to access both the val and keys from foreach

myMap.forEach(([key,val])=>console.log(`${key} and ${val}`));// this seperates the values into arrays splits the strings


myMap.delete(2);
console.log(myMap);