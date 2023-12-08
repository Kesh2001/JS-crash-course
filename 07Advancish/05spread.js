// SPREAD and REST operators

// ...args// this is both, changes onn basis of scenario


// var rv= Math.max(2,5,7,8,9,4);// can take as many vals as we need
// console.log(rv);

// var mo={};
// Object.assign(mo, {a:1,b:2});// altho here the forst needs to be an empty obj// this also takes alot of vals
// console.log(mo);

function  so(a,b){
    return a+b;
}

var a=[5,4];// ,1]
console.log(so(...a));// SPREAD OP// then also only 1st 2 are used
// Takes grp and spreads it into multiple vals

function st(...args){//REST Opr, converts list of vals into arr, always expect an array
    let s=0;
    for (const arg of args) {
        s+=arg;
    }
    return s;
}

console.log(st(3,4,5,6));

function ms(a,b,...args){
    let m=a*b;
    let s=0;
    for (const i of args) {
        s+=i;        
    }
    return [m, s];
}
console.log(ms(2,3,4,5,6,7));