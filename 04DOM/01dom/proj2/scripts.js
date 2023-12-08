const red=document.querySelector(".red");
const cyan=document.querySelector(".cyan");
const violet=document.querySelector(".violet");
const orange=document.querySelector(".orange");
const pink=document.querySelector(".pink");

const center = document.querySelector(".center");

//console.log(window.getComputedStyle(red).backgroundColor);

var getBgcolor= (element)=>{
    return window.getComputedStyle(element).backgroundColor;
}

// var Col=getBgcolor(pink);

// pink.addEventListener('click', ()=>{
//     center.style.backgroundColor=Col;
// });


const magic=(e,c)=>{
    e.addEventListener('click', ()=>{
        center.style.backgroundColor=c;
    });
}

magic(red, getBgcolor(red));