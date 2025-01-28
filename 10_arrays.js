// arrays are a type of object
// collection of multiple values in single variable
// can store different data types
// js arrays are not associative arrays
// js arrays are zero based indexed


const myArray = [1, 2, 3, 4, 5];
// console.log(myArray);
const myArray2 = new Array(1, 2, 3, 4, 5);


myArray.push(6);
// console.log(myArray);


myArray.pop();
// console.log(myArray);


myArray.unshift(0);
// console.log(myArray);


myArray.shift();
// console.log(myArray);


// console.log(myArray.includes(3));


// console.log(myArray.indexOf(9));


const myArray3 = myArray.join();
// console.log(myArray);
// console.log(typeof myArray);
// console.log(myArray3);
// console.log(typeof myArray3);


// slice
// console.log("before using slice original array", myArray);
// const myArray4 = myArray.slice(1, 3);
// console.log("slice ", myArray4);
// console.log("after using slice original array ", myArray);


// splice
// console.log("before using splice original array ", myArray);
const myArray5 = myArray.splice(1, 3);
// console.log("splice ", myArray5);
// console.log("after using splice original array ", myArray);


// ---------------------------------------------------------------------------------

const marvel_heroes = ["spiderman", "ironman", "thor", "hulk"];
const dc_heroes = ["batman", "superman", "flash"]

// marvel_heroes.push(dc_heroes);
// console.log(marvel_heroes);
// console.log(marvel_heroes[4][1]);

// const all_heroes = marvel_heroes.concat(dc_heroes);
// console.log(all_heroes);
// or
const all_new_heroes = [...marvel_heroes, ...dc_heroes];
// console.log(all_new_heroes);

const another_array = [1, 2, 3, [4, 5, 6],7,[6,7,[4,5]]];
const flat_array = another_array.flat(Infinity); //give depth as parameter
// console.log(flat_array);

// console.log(Array.isArray("sagar"));
// console.log(Array.from("sagar"));

// interesting
// console.log(Array.from({
//     name: "sagar",
//     age: 19,
// }));

let score1=100
let score2=200
let score3=300
// console.log(Array.of(score1,score2,score3));

