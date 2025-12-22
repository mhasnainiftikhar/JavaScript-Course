/*
if: Used to run code only when a condition is true.
else: Used to run code if the condition is false.

In simple
If this happens, do something, else do something else*/

//Simple
let age = 18;

if (age >= 18) {
    console.log("You are an adult.");
} else {
    console.log("You are a minor.");
}


//Nested
let marks = 85;

if (marks >= 90) {
    console.log("Grade A");
} else {
    if (marks >= 75) {
        console.log("Grade B");
    } else {
        console.log("Grade C");
    }
}

//Ternary Operator
// It checks a condition and returns one of two values.

//condition ? valueIfTrue : valueIfFalse;

let ageT = 20;

let result = ageT >= 18 ? "Adult" : "Minor";

console.log(result);

