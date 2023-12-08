const uno = ()=>{
     return "Iam one";
}
const dos = ()=>{
    return new Promise((resolve, reject)=>{// promises that something may come back
        setTimeout(()=>{
            resolve("I am 2");
        },2000);
    });
};
const tres = ()=>{
    return "Iam 3";
}

const call = async() => {
    let vo=uno();
    console.log(vo);
    let vd = await dos();//await lets the fun run, wothout moving to next
    console.log(vd);
    let vt=tres();
    console.log(vt);
};
call();