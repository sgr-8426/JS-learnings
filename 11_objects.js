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

console.log(jsUser.greet);
console.log(jsUser.greet());
console.log(jsUser.greetTwo());