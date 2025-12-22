// Array is a variable that can store multiple values in one place.

const arr = ["Jawad", "Junaid", "Zahid"];

console.log("Length:", arr.length);

// Change value
arr[2] = "Jay";
console.log("After change:", arr);

// ---------------- Array Methods ----------------

// push() → add element at the end
arr.push("Ali");
console.log("After push:", arr);

// pop() → remove last element
arr.pop();
console.log("After pop:", arr);

// unshift() → add element at the start
arr.unshift("Hamza");
console.log("After unshift:", arr);

// shift() → remove first element
arr.shift();
console.log("After shift:", arr);

// indexOf() → find index
console.log("Index of Junaid:", arr.indexOf("Junaid"));

// includes() → check if element exists
console.log("Includes Jawad?", arr.includes("Jawad"));

// slice() → copy part of array (does NOT change original)
const newArr = arr.slice(0, 2);
console.log("Slice array:", newArr);
console.log("Original array:", arr);

