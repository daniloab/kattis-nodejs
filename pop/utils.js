/**
 * Read and Write to file (interface)
 */
const fs = require('fs');

const inFile = './in-file.txt';
const outFile = './out-file.txt';

// recreate outfile for idempotency
try {
  fs.unlinkSync(outFile);
} catch (e) {
  // pass
}

const inFileContent = fs.readFileSync(inFile, 'utf8');
const inLines = inFileContent.split('\n');

let lc = 0;

const readline = () => {
  lc += 1;
  return inLines[lc - 1];
};

const print = (line) => {
  // write out line to out-file
  fs.appendFileSync(outFile, `${line}\n`);
};

module.exports = {
  readline,
  print,
};
