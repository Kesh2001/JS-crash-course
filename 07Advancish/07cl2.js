const User=require("./06classes");

const K = new User("abc", "abc@");
console.log(K.getin().email);

K.enroll("React");
K.enroll("Ang");
console.log(K.getCl());

let courses=K.getCl();
courses.forEach((c)=>console.log(c));