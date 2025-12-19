//an operator is a symbol that tells JavaScript to do something with values.

//Mathmatic Operators
let a = 10;
let b = 3;

console.log("Addition:", a + b);        // 13
console.log("Subtraction:", a - b);     // 7
console.log("Multiplication:", a * b);  // 30
console.log("Division:", a / b);        // 3.333...
console.log("Remainder:", a % b);       // 1
console.log("Power:", a ** b);           // 1000


//Assigment Opeartors

let x = 10;

console.log("Start:", x);

x += 5;
console.log("After += 5:", x);

x -= 3;
console.log("After -= 3:", x);

x *= 2;
console.log("After *= 2:", x);

x /= 4;
console.log("After /= 4:", x);

x %= 3;
console.log("After %= 3:", x);

x **= 2;
console.log("After **= 2:", x);

//Comparsion Operators
let num1 = 8;
let num2 = "8";
let num3 = 15;

console.log(num1 == num2);    // true (value same)
console.log(num1 === num2);   // false (type different)
console.log(num1 != num3);    // true
console.log(num1 !== num2);   // true
console.log(num3 > num1);     // true
console.log(num1 < num3);     // true
console.log(num1 >= 8);       // true
console.log(num3 <= 15);      // true


//---------------precedence of operators------------

let marks = 40;

// arithmetic + assignment 
marks += 10 * 2;   // 10 * 2 runs first -> 20, then marks = 40 + 20

// comparison
let isPassed = marks >= 60;

console.log("Final Marks:", marks);
console.log("Passed:", isPassed);
