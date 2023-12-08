const courses=[
    {
        name: "Complete React JS Course",
        price: "2.3"
    },
    {
        name: "Complete MERN JS Course",
        price: "4.3"
    },
    {
        name: "Complete Angular JS Course",
        price: "3.3"
    },
    {
        name: "Complete Node JS Course",
        price: "5.3"
    }
];

function generateLIST(){
    const ul=document.querySelector(".list-group");
    //ul.innerHTML="";
    courses.forEach(course =>{
        const li=document.createElement("li");// It creates the <li></li>
        li.classList.add("list-group-item");// giving class name to the property
        const name=document.createTextNode(course.name);// adding the text to be shown in between the tags
        li.appendChild(name);// Adding the name to the li, as until now it was just a reference  

        const span=document.createElement("span");
        span.classList.add("float-right");
        const price=document.createTextNode("$ "+ course.price);
        span.appendChild(price);

        li.appendChild(span);// to inject in the li
        ul.appendChild(li);

    })
};
generateLIST();
// can also be done as:-
document.addEventListener("load", generateLIST);// dont put brackets, we only pass the reference for the object and the document runs itself
//idk y the above line is not working after resetting ul


// const button=document.querySelector(".sort-btn");
// button.addEventListener("click", ()=>{
//     courses.sort((a,b)=>a.price-b.price);
//     generateLIST();
// });


// const div=document.querySelector(".container bg-warning p-4");
// const b2= document.createElement("button");
// b2.classList.add("btn"," btn-primary" ,"btn-lg" ,"mt-4" ,"mx-auto" ,"d-block" ,"sort-btn");
// b2.setAttribute("type","button");
// const t=document.createTextNode("Inverse Sort");
// b2.appendChild(t);
// div.appendChild(b2);
// b2.addEventListener("click",()=>{
//     courses.sort((a,b)=>b.price-a.price);
//     generateLIST();
// })
