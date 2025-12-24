'use strict';

// Global Scope
const globalVar = 'I am global';

function outerFunction() {
  // Function Scope
  const outerVar = 'I am outer';

  function innerFunction() {
    // Inner Function Scope
    const innerVar = 'I am inner';

    console.log(innerVar);   // Found in inner scope
    console.log(outerVar);   // Found via scope chain
    console.log(globalVar);  // Found via scope chain
  }

  innerFunction();
}

outerFunction();
