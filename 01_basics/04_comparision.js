// console.log(2 > 1);
// console.log(2 >= 1);
// console.log(2 < 1);
// console.log(2 == 1);
// console.log(2 != 1);


// console.log("2" > 1); // implicitly convert
// console.log("02" > 1);

// not recommended 
  console.log(null > 0);
  console.log(null == 0); 
  console.log(null >= 0);
  // == equality operator does not implicitly convert null to 0 
  // comparison operators implicitly convert null to 0
  
  console.log(undefined == 0);
  console.log(undefined > 0);
  console.log(undefined < 0);

// === 

console.log("2" === 2); 
// strict equality === operator checks both value and datatype
// loose equality == operator checks only value
