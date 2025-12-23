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
