var User ={
    name:"",
    getUname: function(){
        console.log(`USer name is: ${this.name}`);
    },
}

var Kes = Object.create(User);// this will create properties under proto when run on browser
console.log(Kes);
Kes.name="KEshav";
Kes.getUname();//altho here it shows empty, u cn access the methods heere that u built still

var sam=Object.create(User,{
    name: {value:"Sammy"},
    ccount:{value:3}
})