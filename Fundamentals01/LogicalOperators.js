// && Operator (All conditions must be true)
true && true   // true
true && false  // false

let age = 17;
let hasID = true;

if (age >= 18 && hasID) {
    console.log("You can enter");
} else {
    console.log("Entry not allowed");
}

// || Or Operator (At least one condition must be true)
false || true  // true

let isWeekend = true;
let isHoliday = false;

if (isWeekend || isHoliday) {
    console.log("You can relax");
}


// ! Not Operator (Reverses the value)
!true  // false
!false // true


let isLoggedIn = false;

if (!isLoggedIn) {
    console.log("Please log in");
}


//Example
let age1 = 22;
let hasTicket = true;
let isVIP = false;

if ((age1 >= 18 && hasTicket) || isVIP) {
    console.log("Allowed entry");
} else {
    console.log("Not allowed");
}

