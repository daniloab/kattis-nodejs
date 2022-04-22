// the final resut to make works running locally and entering the rock number dinamycally
'use strict'

const readline = require('readline')

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
})

const questionNTemperatures = () => {
  return new Promise((resolve, reject) => {
    rl.question('Number of temperatures collected: ', (answer) => {
      resolve(answer)
    })
  }).then(value => value);
}

const questionTemperatures = () => {
  return new Promise((resolve, reject) => {
    rl.question('Type each temperature collected: ', (answer) => {
      resolve(answer)
    })
  }).then(value => value);
}

const main = async () => {
  const nTempeatures = await questionNTemperatures();
  const lineEachTemperature = await questionTemperatures();
  const eachTemperature = lineEachTemperature.split(' ').map(t => parseInt(t));

  const negativesTemperatures = eachTemperature.filter(t => t < 0)?.length || 0;
  console.log(negativesTemperatures);

  rl.close()
}

main()