/*
In JavaScript, truthy and falsy are values that behave like
true or false when used in a condition (like if).

------------Falsy Values--------------
false
0
-0
0n
""        // empty string
null
undefined
NaN

----------Truthly Values-----------
true
1
-1
"hello"
"0"
[]
{}
function(){}
*/


let value = 0;//Falsy

if (value) {
    console.log("Truthy");
} else {
    console.log("Falsy");
}


let value1 = "hello";//Truthly

if (value1) {
    console.log("Truthy");
} else {
    console.log("Falsy");
}
