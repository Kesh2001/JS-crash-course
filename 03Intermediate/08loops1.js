const myS=["Raj", "Del","Assa",1947,"Tam","MAH"];

// for(let i=0;i<myS.length;i++){
//     if(typeof myS[i]!=="string") continue;//use break to stop execution of loop
//     console.log(myS[i]);
// }

let i=0;
while(i<myS.length){
    console.log(myS[i]);
    i++;
}
{let i=20;
do{
    console.log(i);
    i++;
}while(i<20);
}

myS.forEach((s)=>console.log(s));