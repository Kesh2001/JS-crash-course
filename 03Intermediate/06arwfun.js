// CABWA-can also be written as
// function isEven(element){
//     // if(element%2===0)
//     // return true;
//     // return false;
//     return element%2===0;
// }
// CABWA
var isEven=(element)=>{
    return element%2===0;
}
console.log(isEven(2));
var result=
[2,4,6,8].every(isEven);
// CABWA
console.log(result);
// CABWA
var r=[2,3,4].every(isEven);
console.log(r);
// CABWA
var a=[2,4,6].every((e)=>{
    return e%2===0;
})
console.log(a);
// CABWA
var b=[2,4,6].every((x)=>(x%2===0));
console.log(b);