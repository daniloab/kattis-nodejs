// the final result to send for kattis compiler
const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.on('line', (line) => {
    const nums = line.split(' ');
    const R1 = parseInt(nums[0]);
    const S = parseInt(nums[1]);

    const res = (S*2) - R1;
    console.log(res);
});

// the final resut to make works running locally and entering the rock number dinamycally
// const readline = require('readline');

// const rl = readline.createInterface({
//     input: process.stdin,
//     output: process.stdout
// });

// rl.question('Enter the r1 and s values spaced by a blank space: ', (answer) => {
//     const nums = answer.split(' ');
//     const R1 = parseInt(nums[0]);
//     const S = parseInt(nums[1]);

//     const res = (S*2) - R1;
//     console.log('result: ', res);
// });