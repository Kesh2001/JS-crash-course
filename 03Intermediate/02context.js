
sayhello();//works due to global context
function sayhello()
{
    console.log("Hello");
}

// context differs in node and browser
// in browser the context is window
// there is always a global context in js

var myName="KEshav";
if(myName===myName){
    console.log("TRue");
}
// if(myName===window.myName){//prints true in browser as the browser context is window // however this will give an eroor in the node
//     console.log("TRue");
// }


// there are 2 types of contexts availabkle to us, global and one that is executing right now

var num=1;
function sayMe(){
    console.log("Say me");
}
// global context only collects info for us

sayMe();//when we call the function the execution context kicks in and we are out of the global context for a bit
// exec context is for every executing line

// 2 rules of exec context:
// func declaration is scanned and made availbale
// variable dec are also scanned and made undefined

function tipper(a){
    var bill=parseInt(a);// type conversion of the a variable
    console.log(bill+5);
}

tipper("5");
// tipper("a");//give NaN

// bigTipper(200);// now this wont worrk as this var hasnt been declared yet. Altho its a func, its a var first and thus tthe func rules dont apply similarly

var bigTipper = function (a){
    var bill= parseInt(a);
    console.log(bill+15);
}

console.log(name);// global context knows that the var is ahead but it can't let u use it before
var name="kes";

function sayName(){
    var name="mr.h";
    console.log(name);

}
sayName();
console.log(name);

