const Kesh={
    fname: "K",
    lname: "An",
    cc:4,
    role: "Admin",
    getInfo: function (){
        console.log(`
        Fname is ${this.fname}
        Lname is ${this.lname}
        his role is ${this.role}
        and he is studying ${this.cc}
        `);
    }

};

const dj={
    fname: "ROck",
    lname: "DJ",
    role: "ACtor",
    cc: 5
};

Kesh.getInfo.bind(dj);// bind only gives ref

Kesh.getInfo.bind(dj)();
// OR
var d= Kesh.getInfo.bind(dj);
d();

Kesh.getInfo.call(dj);// call directly calls it, unlike bind

