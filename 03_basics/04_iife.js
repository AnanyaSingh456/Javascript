// Immediately Invoked Function Expressions (IIFE)


(function chai(){
    // named IIFE
    console.log(`DB CONNECTED`);
})(); 
// if ; missing =>  JS misinterprets the second IIFE as an argument being passed to the result of the first function.
// ResultOfIIFE1 (function aurcode() {...})();
( (name) => {
    console.log(`DB CONNECTED TWO ${name}`);
} )('hitesh')


