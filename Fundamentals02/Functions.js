/*
Functions are Vital parts of JS They contain multiple line of codes and act as a
machine that get an input and return an output
 */

//Function as a machine
function juiceMachine(apple,orange){
    console.log(apple,orange);
    const juice=`Juice contain ${apple} apple and ${orange} orange`;
    return juice
}
const readyJuice=juiceMachine(5,0);
console.log(readyJuice)



//------------------Declaration and Expression----------
//Declaration -> function that is defined with a name and can be used before it is written in the code.

sayHi();

function sayHi() {
  console.log("Hi!!!! I am Hasnain");
}

//Expression -> a function stored in a variable and cannot be used before it is defined.
sayHello(); // Error

const sayHello = function () {
  console.log("Hello!");
};

//Arrow Function  ()=>{}
const calcAge = (birthYear) => {
  const age = 2025 - birthYear;
  return age;
};

console.log(calcAge(1998));



