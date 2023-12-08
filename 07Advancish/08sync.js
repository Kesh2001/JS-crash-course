const uno = ()=>{
    console.log("Iam one");
}
const dos = ()=>{
    setTimeout(()=>{
        console.log("WOOO");
    },3000)
    console.log("Iam 2");
}
const tres = ()=>{
    console.log("Iam 3");
}

uno();
dos();// first the next line comes, until the time is completed
tres();

