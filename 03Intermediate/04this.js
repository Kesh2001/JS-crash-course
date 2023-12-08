// part1 for "this" keyword

console.log(this);//empty {} as we running in node

var game="bb";
function sayN(){
    var name="Kes";
    console.log(this);
}
sayN();