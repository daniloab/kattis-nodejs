const { readline , print } = require('../../utils');

let lines = [];
while (line = readline()) {
  lines.push(line);
}

const lineEachTemperature = lines[1];
const eachTemperature = lineEachTemperature.split(' ').map(t => parseInt(t));

const negativesTemperatures = eachTemperature.filter(t => t < 0)?.length || 0;

print(negativesTemperatures);
