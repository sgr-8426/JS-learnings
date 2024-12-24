// Stack memory => Primitive datatypes
// Heap memory => Non-Primitive datatypes

// Stack
let myName = "sagar"
let myName2 = myName

myName2 = "bravo"

console.log(myName);
console.log(myName2);




// Heap
let user = {
    email: "user@google.com",
    upi: "user@ybl"
}

let user2=user

user2.email = "sagar@gmail.com"

console.log(user.email);
console.log(user2.email);


