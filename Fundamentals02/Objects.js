// Object -> A variable that stores many values/Variables in key-value pairs
const bio = {
  firstName: 'Hasnain',
  age: 24,
  email: 'hasnainiftikhar930@gmail.com',
  address: 'Lahore',
  "home city": "Pattoki",

  getInfo: function () {
    return `My name is ${this.firstName}. I am ${this.age} years old and I live in ${this.address}.`;
  },

  updateAge: function (newAge) {
    this.age = newAge;
  }
};

console.log(bio);

// Dot notation(Used when you know the property name.)
console.log(bio.firstName);
console.log(bio.age);

// Bracket notation(Used when the property name is in a variable or has spaces/special characters.)
console.log(bio["home city"]);

// Using object methods
console.log(bio.getInfo());

// Updating value using 'this'
bio.updateAge(25);
console.log("Updated Age:", bio.age);

// Built-in object methods
console.log(Object.keys(bio));
console.log(Object.values(bio));
console.log(Object.entries(bio));
