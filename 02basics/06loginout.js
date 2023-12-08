//show user a signout button if he is logged in
// other wise show him option to login

var auth=true;

// if(auth){
//     console.log("Show signoout button");
// }
// else{
//     console.log("Show login option");
// }

// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Expressions_and_Operators


auth ? console.log("Signout Button"): console.log("LOGIN");

// create an application with following roles:
// admin- gets full access
// subadmin - gets access to create/delete courses
// testprep - gets aceess to create/delete tests 
// user - gets accesss to consume content 

var user="abc";

switch(user){
    case "admin":
        console.log("You get full access");
    break;
    case "subadmin":
        console.log("gets access to create/delete courses");
    break;
    case "testprep":
        console.log("gets aceess to create/delete tests");
    break;
    case "user":
        console.log("gets accesss to consume content");
    break;

    default:
        console.log("trial user");
        break;
}

