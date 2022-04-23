const { readline , print } = require('../../utils');

let lines = [];
while (line = readline()) {
  if(line !== '0') {
    lines.push(line);
  }
}

for (const line of lines) {
  const bagSplitted = line.split(' ');

  const bagItems = bagSplitted.slice(1, bagSplitted[bagSplitted.length -1]);

  const bagSum = bagItems.reduce((acc, cur) => parseInt(acc) + parseInt(cur), 0);

  if(bagSum % 2 === 0) {
    const bagWeight = bagSum / 2;
    print(`${bagWeight} ${bagWeight}`);
    continue;
  }

  const bagWeightInDecimals = bagSum / 2;
  const kattisBagWeight = Math.ceil(bagWeightInDecimals);
  const kittenBagWeight = bagSum - kattisBagWeight; 

  print(`${kattisBagWeight} ${kittenBagWeight}`);
}
