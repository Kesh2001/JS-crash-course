//  allow user to access course if he is:
// logged in from email
// logged in from Google
// logged in from Facebook 

var email=true;
var fb=false;
var google=false;

if(email||fb||google){
    console.log("login success");
}

