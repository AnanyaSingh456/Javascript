// Dates
// toString() , toDateString() , toLocaleString() , new Date(can pass date) , Date.now() , getTime() , getMonth() , getDay()
//                                                           month-day-year or year-mon-day

let myDate = new Date()
// console.log(myDate.toString());
// console.log(myDate.toDateString()); //Sun Aug 03 2025
// console.log(myDate.toLocaleString()); //03/08/2025, 8:20:00 pm
// console.log(typeof myDate); //object

// let myCreatedDate = new Date(2023, 0, 23) //month index from zero
// let myCreatedDate = new Date(2023, 0, 23, 5, 3)
// let myCreatedDate = new Date("2023-01-14")
let myCreatedDate = new Date("01-14-2023") //here month indexing from 1
// console.log(myCreatedDate.toLocaleString());

let myTimeStamp = Date.now()

// console.log(myTimeStamp); //milliseconds from 1 Jan 1970
// console.log(myCreatedDate.getTime()); //milliseconds to that date
// console.log(Math.floor(Date.now()/1000)); // to seconds

let newDate = new Date()
console.log(newDate);
console.log(newDate.getMonth() + 1); //for 1 based indexing for months
console.log(newDate.getDay()); // 1 for monday and so on ...

// `${newDate.getDay()} and the time `

newDate.toLocaleString('default', { // default or 'en-US' / 'en-GB'(UK) / 'hi-IN' / 'fr-FR'
    weekday: "long", // long -> SUNDAY 
    
})

