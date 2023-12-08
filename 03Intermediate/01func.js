function sayhello(){
    console.log("HEllow");
}
function sayhello(name){
    console.log("Hello "+ name);// ("HEllow ${name}")
}
// sayhello();//write like this when you want to call the function
// sayhello();
// sayhello;//written like this when you only want to reffer to the function

sayhello("Kes"); // JS can't do runtime polymorphism

function namastey(){
    return "Hello in India";
}

var greetings= namastey();
console.log(greetings);
console.log(namastey());

/*
Define a functtion that can answer the role of a user.
// admin- gets full access
// subadmin - gets access to create/delete courses
// testprep - gets aceess to create/delete tests 
// user - gets accesss to consume content 
other - trial user.

Input: getUSerRole(name, role)
*/

var getUserRole=function (name , role){ //yes we can define func in var in JS, this can be also:
    switch(role){// var getUserRole=(name, role)=>{} // this is known as arrow function
        case "admin":
            return `${name} is admin with all access`;
            break; //this is not necessary as we already move out of func with return
        case "subadmin":
            return `${name} gets to create/delete courses`;
            break;    
        case "testprep":
            return `${name} gets to create/delete tests`;
            break;
        case "user":
            return `${name} gets access to consume sontent`;
            break;
        case "other":
            return `${name} is trial user`;
            break;
        default:
            return `${name} is a user`;
            break;
    }
}

console.log(getUserRole("KEs", "testprep"));

var getRole=getUserRole("sam", "user");
console.log(getRole);
