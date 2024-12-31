const name = "sagar"
const repoCount = 50

// console.log(name + repoCount + "value");

// console.log(`Hello my name is ${name} and my erepo count is ${repoCount}`);

const gameName = new String('Sagar-N')

// console.log(gameName[0]);
// console.log(gameName.__proto__);

// console.log(gameName.length);
// console.log(gameName.toUpperCase());
// console.log(gameName.charAt(3));
// console.log(gameName.indexOf('a'));

// cant parse negative value to substring method
// does not include the last index
// if neagtive value given it will be considered as 0
// console.log(gameName.substring(0, 4));

// can parse negative value to slice method and result starts from the end
// first in positive and second is negative, negative starts from -1 means last element
// does not include the last index
// if first parsing is negative it will be considered as 0
console.log(gameName.slice(5, -6));

