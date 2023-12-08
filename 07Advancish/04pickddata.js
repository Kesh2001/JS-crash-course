// Destructuring data

const user = ["Kesh", 4, "Ad"];

// var role = user[2];
// var name = user[0];

// var [name, cc, role]=user;
// console.log(role);

const myUser={
    n: "K",
    cc: "5",
    r: "a"
};
console.log(myUser.cc);

const {n,cc,r}=myUser;
console.log(cc);// while destructing data from obj, the name of keys need to be same as new ones, or will give undefined
