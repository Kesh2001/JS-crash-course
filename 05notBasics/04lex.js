// lexical scoping is classical way of writing js

function init(){
    var fname="Kesh";
    console.log("I am init");
    function sayfname(){
        console.log(fname);
    }
    return sayfname;// this leaves a reference to fname in the memory and hence the scope isnt expired
}
var n= init();//closure
n();//as n has the ref to sayfname function, this can be executed.
// this is known as CLOSURE

function doadd(x){
    return function (y){
        return x+y;
    }
}

var a5= doadd(4);// this only has ref to next function, to get add we run:-
console.log(a5(4));

console.log(doadd(4)(6));// so this way we cn run it directly
// the above is aka curring, the multiple parenthesis passing


