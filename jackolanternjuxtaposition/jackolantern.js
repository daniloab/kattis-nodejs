const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question('Enter the', (line) => {
    var nums = line.split(' ');
    var a = parseInt(nums[0]);
    var b = parseInt(nums[1]);
    /*Solve the test case and output the answer*/
});