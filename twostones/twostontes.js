// the final result to send for kattis compiler
// const readline = require('readline');

// const rl = readline.createInterface({
//     input: process.stdin,
//     output: process.stdout
// });

// rl.on('line', (line) => {
//     console.log(line % 2 === 0 ? 'Bob' : 'Alice');
// });

// the final resut to make works running locally and entering the rock number dinamycally
const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question('What is the rock number', (number) => {
    console.log(number % 2 === 0 ? 'Bob' : 'Alice');
});