var User = function (fname,ccount){ //recommmended when making prototypes, use upper cases
    this.fname=fname;
    this.ccount=ccount;
    this.getcc=function(){
        console.log(`Course count: ${this.ccount}`);
    };
}

User.prototype.getfname = function(){//prototype lets u add definition stuff in the object without actually going inside the onj code 
    console.log(`Your fname is: ${this.fname}`);
};


var Kesh = new User("K",2);// without new in this statement the 'this' referred to the global object therefore gave undefined to us
// new keyword shifts that to be applied to scope so that the function call can refer to the scope

Kesh.getcc();
if(Kesh.hasOwnProperty("fnamee"))
Kesh.getfname();
//console.log(Kesh);

var t1= new User("t1",3);
//console.log(t1);
t1.getcc();
