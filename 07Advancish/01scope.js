console.log(name); 

var name="Kesh"; // var gives undefined, which cannot be caught i think, so it is better to use let
// as let will throw error

if(true){
    var lname="Anan";
}
console.log(lname);// var declared inside should not be accessible outside

// thus try to use let inside scope