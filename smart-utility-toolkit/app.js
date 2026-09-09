// app.js
// Demonstrates importing and reusing custom modules (isEven, logger)

const isEven = require('./modules/isEven');
const log = require('./modules/logger');

log('Starting module reusability demo...');

const numbers = [4, 7, 10, 15, 22];

numbers.forEach((num) => {
  if (isEven(num)) {
    log(`${num} is Even`);
  } else {
    log(`${num} is Odd`);
  }
});

log('Module reusability demo finished.');

/*
Run with: node app.js

Sample Output:
[timestamp] Starting module reusability demo...
[timestamp] 4 is Even
[timestamp] 7 is Odd
[timestamp] 10 is Even
[timestamp] 15 is Odd
[timestamp] 22 is Even
[timestamp] Module reusability demo finished.
*/
