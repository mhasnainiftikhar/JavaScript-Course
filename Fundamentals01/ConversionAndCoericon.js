//Conversion -> you control the change
//Coercion -> JavaScript does it for you

//Conversion
let age = "25";      // string
let ageNumber = Number(age);  // converted to number

console.log(ageNumber);
console.log(typeof ageNumber);

Number("10");   // 10
String(50);     // "50"
Boolean(1);     // true
Boolean(0);     // false


//Coericon
let result = "10" + 5;

console.log(result);
console.log(typeof result);
console.log("10" - 5);   // 5  (string -> number)
console.log("10" * 2);   // 20
console.log("10" / 2);   // 5
