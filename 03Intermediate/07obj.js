var user = {
    firstN: "Kesh",
    lastN:"Ana",
    role:"Admin",
    loginCount:32,
    faceb:true,
    coursel:[],
    buyCourse: function(courseName){
        this.coursel.push(courseName);

    },
    getCourseCount: function(){
        return `${this.firstN} is enrolled in total of ${this.coursel.length} courses.`;
    },
    info: function(){
        return user;
    }
};
console.log(user.firstN);

console.log(user["lastN"]);// KEys are stored as strings so either remember to always make them as strings and if use [] then do use ""

user.loginCount=55;
console.log(user.loginCount);

console.log(user);

console.table(user);

var realme9={
    model: "pro",
    version: 9,
    storage: 128,
    ram:8,
    os: "android",
    charging: "C",
    Battery: 4800
};
console.log(user.getCourseCount());
user.buyCourse("ReactJS Course");
console.log(user.getCourseCount());
console.log(user.info());

// for all regular function calls, this points to window object
console.log(this);

var u2={
    firstName: "KEsg",
    couseC:4,
    getCourse:function(){
        console.log("line 51", this);
        function sayH(){
            console.log("Hello");
            console.log("Line10", this);
        }
        sayH()
    }
};
u2.getCourse();