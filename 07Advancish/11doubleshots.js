const google = "google"
const fb = null;

if (google) {
    console.log("Block 1");    
}
if(fb){// doesnt give false, gives falsy
    console.log("Block 2");
}

// how to convert falsy into true/false

// !fb converts it into a boolean, but reverses 

// !!fb converts it into boolean wothout reversing
if(!!fb){// since it is a false value in original, the if block doesnt run
    console.log("BLock 3");
}