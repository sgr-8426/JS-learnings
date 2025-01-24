let myDate = new Date(); 
// console.log(myDate.toString());
// console.log(myDate.toDateString());
// console.log(myDate.toJSON());
// console.log(myDate.toLocaleDateString());
// console.log(myDate.toISOString());
// console.log(myDate.toTimeString());
// console.log(myDate.toUTCString());

// console.log(typeof myDate);

// let myCreatedDate = new Date(2023, 0, 23);
// console.log(myCreatedDate.toDateString());

// let myCreatedDate = new Date(2023, 0, 23, 5, 3);
// console.log(myCreatedDate.toLocaleString());

// let myCreatedDate = new Date("2023-01-14");
// console.log(myCreatedDate.toLocaleString());

// let myCreatedDate = new Date("01-14-2023");
// console.log(myCreatedDate.toLocaleString());

// let myTimwStamp = new Date(); 
// let myTimwStamp = Date.now(); 
// console.log(myTimwStamp);
// console.log(myCreatedDate.getTime());

// console.log(Math.floor(Date.now()/1000));

let newDate = new Date();
// console.log(newDate);
// console.log(newDate.getDate());
// console.log(newDate.getMonth()+1);
newDate.toLocaleString('default', {
    weekday: "long",
    timeZone: "Asia/Kolkata"
});