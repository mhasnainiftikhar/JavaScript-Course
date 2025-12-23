//Loops -> loop is used to run the same code again and again until a condition becomes false

for (let i = 1; i <= 5; i++) {
  console.log(i);
}

//Loop with Break 
for (let i = 1; i <= 5; i++) {
  if (i === 3) break;
  console.log(i);
}
//Loop with Continue
for (let i = 1; i <= 5; i++) {
  if (i === 3) continue;
  console.log(i);
}

// forward and backward looping on arrays in JavaScript
const names = ["Ali", "Ahmed", "Sara", "Usman"];

for (let i = 0; i < names.length; i++) {
  console.log(names[i]);
}

for (let i=names.length-1; i>=0; i--){
    console.log(names[i]);
}


//While loop
let count = 1;

while (count <= 15) {
  console.log(`While loop ${count}`);
  count++;
}
