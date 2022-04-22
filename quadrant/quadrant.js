// the final result to send for kattis compiler
// const readline = require("readline");

// const rl = readline.createInterface({
//   input: process.stdin,
//   output: process.stdout,
// });

// rl.question("integerX", integerX => {
//   const x = parseInt(integerX);

//   rl.question("integerY", integerY => {
//       const y = parseInt(integerY);
//     })
//     .on("close", () => {
//       if(x > 0 && y > 0) {
//         console.log('1');
//       } else if (x < 0 && y > 0) {
//         console.log('2')
//       } else if (x < 0 && y < 0) {
//         console.log('3');
//       } else if (x > 0 && y < 0) {
//         console.log('4');
//       }
//     });
// });

// rl.once("integerX", integerX => {
//   const x = parseInt(integerX);

//   rl.on("integerY", integerY => {
//       const y = parseInt(integerY);
//     })
//     .on("close", () => {
//       if(x > && y > 0) {
//         console.log('1');
//       } else if (x < 0 && y > 0) {
//         console.log('2')
//       } else if (x < 0 && y < 0) {
//         console.log('3');
//       } else if (x > 0 && y < 0) {
//         console.log('4');
//       }
//     });
// });

// the final resut to make works running locally and entering the rock number dinamycally
'use strict'

const readline = require('readline')

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
})

const questionIntegerX = () => {
  return new Promise((resolve, reject) => {
    rl.question('input integer x ', (answer) => {
      resolve(answer)
    })
  }).then(value => value);
}

const questionIntegerY = () => {
  return new Promise((resolve, reject) => {
    rl.question('input integer y ', (answer) => {
      resolve(answer)
    })
  }).then(value => value);
}

const main = async () => {
  const x = await questionIntegerX();
  const y = await questionIntegerY();

  const isRight = parseInt(x) > 0;
  const isUp = parseInt(y) > 0;

  const isQuadrantA = isRight && isUp;
  const isQuadrantB = !isRight && isUp;
  const isQuadrantC = !isRight && !isUp;

  if(isQuadrantA) {
    return console.log('1');
  }

  if(isQuadrantB) {
    return console.log('2');
  }

  if(isQuadrantC) {
    return console.log('3');
  }
  
  console.log('4');

  rl.close()
}

main()