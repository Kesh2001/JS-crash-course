const cards = document.querySelectorAll(".card")
console.log(cards);

var isflipped = false;
var fcard;
var seccard;

cards.forEach((card)=>card.addEventListener("click", flip));


function  flip(){
  // console.log("Card flipped");
  this.classList.add("flip");
  if(!isflipped){
    isflipped = true;
    fcard = this;
  } else{
    seccard = this;
    check();

  }
}

function check(){
  if(fcard.dataset.image===seccard.dataset.image){
    success();
  } else{
    fail();
  }
}
function success(){
  //console.log("Success");
  fcard.removeEventListener('click', flip);
  seccard.removeEventListener('click', flip);
  reset();
}

function fail(){
  //console.log("Fail");
  setTimeout(() => {
    fcard.classList.remove("flip");
  seccard.classList.remove("flip");
  reset();
  }, 1000);
}
function reset(){
  isflipped = false;
  fcard = null;
  seccard = null;
}

(function shuffle(){
  cards.forEach((card)=>{
    var i = Math.floor(Math.random()*16)
    card.style.order = i;
  });
})();// calls itself

