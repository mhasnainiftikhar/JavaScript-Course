//A variable that store many variables on the Key value pairs
const bio={
    firstName:'Hasnain',
    age:24,
    email:'hasnainiftikhar930@gmail.com',
    address:"Lahore",
    "home city": "Pattoki"

}
console.log(bio)

//--------------------dot notation and bracket notation in JavaScript objects-----------

// Dot -> Used when you know the property name.
console.log(bio.firstName); 
console.log(bio.age);

// Bracket -> Used when the property name is in a variable or has spaces/special characters.

console.log(bio['home city'])