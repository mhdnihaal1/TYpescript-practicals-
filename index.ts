// let sum = 10;
// sum = 7
// let sub = 30_000
// console.log(sub,sum)
// console.log(1234345)

// let skill : (string|number)[]= ['sdf','asdf',234,234]

import * as readline from 'readline';

// Create a readline interface
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

// Prompt the user for input
rl.question('Enter a character: ', (char: string) => {
  console.log(`You entered: ${char}`);
  rl.close();
});