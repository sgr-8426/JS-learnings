const number = 42;
// console.log(number);

const balance = new Number(2242.89840582305);
// console.log(balance);

// console.log(balance.toFixed(2));

// console.log(balance.toPrecision(6));
// console.log(balance.toPrecision(3));

// console.log(balance.toString());
// console.log(typeof balance.toString());
// console.log(balance.toString().length);

const hundreds = 100000000000;
// console.log(hundreds.toLocaleString());
// console.log(hundreds.toLocaleString(`en-IN`));

// go to console any check Number.MIN_VALUE and Number.MAX_VALUE and Number.someMethod()


// +++++++++++++++++++++++++++++++++++++++++Math

// console.log(Math);
// go to console and check Math object

// make number positive
// console.log(Math.abs(-42));

// console.log(Math.round(4.1));
// console.log(Math.ceil(4.5));
// console.log(Math.floor(4.5));

// console.log(Math.min(1, 2, 3, 4, 5));
// console.log(Math.max(1, 2, 3, 4, 5));

// value between 0 and 1
// console.log(Math.random());
// console.log(Math.random()*10);
// console.log((Math.random()*10)+1);
// console.log(Math.floor((Math.random()*10)+1));

const min = 10;
const max = 20;
console.log(Math.floor(Math.random()*(max-min+1))+min);