class User{
    constructor(name, email){
        this.name=name;
        this.email=email;
    }
    #clist=[];// to define privately add # before variablename
    getin(){
        return {name: this.name, email: this.email};
    }
    enroll(cname){//setter
        this.#clist.push(cname);
    }
    getCl(){//getter
        return this.#clist;
    }
    static login(){// static keyword will make it non-inheritable
        return "logged in";
    }
};
// XXXXXXXXXXXXXX
//Inheritance
class SubAdmin extends User{
    constructor(name, email){
        super(name,email);// accesses superclass's constructor
    }
    getAi(){
        return "Subadmin";
    }
    login(){
        return "Yo kid here!";//this method will take priority over parents, as this has been made here specifically with the same name
    }
}
// XXXXXXXXXXXXXXXXx

module.exports=User;

const rock = new User("rock","rock@.com");

console.log(rock.getin());
rock.enroll("Ang");
console.log(rock.getCl());
console.log(rock.clist);// when private, u cant access them directly

// Inheritance Section:- 
const tom= new SubAdmin("tom", "tom@gre.com");
console.log(tom.getAi());
console.log(tom.login());
console.log(tom.getin());