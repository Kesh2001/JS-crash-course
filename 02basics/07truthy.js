// All of these are falsy: (anything other than this is truthy)
// undefined
// null
// 0
// ''
// NaN- Not a number

var user; //this is undefined

var u1=null;

if(u1) //will work if u1="null", wont if u1=""
    console.log("Condition is true");

var n="2"
// Coercion: JS loosely comapres the 2 for the value :-
if(2==n)
    console.log("Printing"); 
// Non-coercion: JS checks for even the typof the var :-
if(2===n){
    console.log("Is it?");
}