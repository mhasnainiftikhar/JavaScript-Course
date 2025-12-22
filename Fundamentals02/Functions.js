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