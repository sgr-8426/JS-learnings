// singleton obj created by constructor only
// Object.create

// object literals

const mySymbol = Symbol("key1");

const jsUser = {
    name: "john",
    "full name": "john doe",
    mySymbol: "key1",
    [mySymbol]: "mykey",
    age: 100,
    location: "jaipur",
    email:"sagar@google.com",
    isLoggedIn: true,
    ladtLogInDays:["monday", "tuesday", "wednesday"]
}

// console.log(jsUser.name);
// console.log(jsUser["full name"]);

// console.log(jsUser.mySymbol);
// console.log(typeof jsUser.mySymbol);
// console.log(jsUser[mySymbol]);
// console.log(typeof jsUser[mySymbol]);

jsUser.age = 101;
// console.log(jsUser.age);
// Object.freeze(jsUser);
jsUser.age = 102;
// console.log(jsUser.age);
// console.log(jsUser);

jsUser.greet = function(){
    console.log("hello");
};

jsUser.greetTwo = function(){
    console.log(`hello ${this.name}`);
};

// console.log(jsUser.greet);
// console.log(jsUser.greet());
// console.log(jsUser.greetTwo());

// singleton object
// const user= new Object();
// non singleton object
const user2 = {};

user2.id = "123abc"
user2.name = "john";
user2.isLoggedIn = false;

// console.log(user2);

const regularUser = {
    email: "some@gmail.com",
    fullname: {
        userFullName:{
            fisrtName: "john",
            lastName: "doe"
        }
    }
}

// console.log(regularUser.fullname.userFullName.fisrtName);

const ob1 = {
    a: 1,
    b: 2
}
const ob2 = {
    c: 3,
    d: 4
}
obj5 = {
    e: 5,
    f: 6
}
// const ob3 = {ob1,ob2}
const obj3 = Object.assign(ob1, ob2);
const obj4 = Object.assign({}, ob1, ob2, obj5);
// console.log(ob3);

const obj6 = {...ob1, ...ob2, ...obj5};
// console.log(obj6);

const serverOuput = [{id:1, name: "john"}, {id:2, name: "sam"}, {id:3, name: "jane"}];
serverOuput[1].name = "sugar";

const tinderUser={
    name: "john",
    age: 30,
    location: "jaipur",
    email: "abc@google.com"
}

// returns an array of keys
// console.log(Object.keys(tinderUser));
// returns an array of values
// console.log(Object.values(tinderUser));

// console.log(Object.entries(tinderUser));

console.log(tinderUser.hasOwnProperty("name"));
