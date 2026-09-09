// dice.js
// A random dice generator using the crypto module for secure randomness
// Run with: node dice.js [numberOfRolls]

const crypto = require('crypto');
const log = require('./modules/logger');

// Generates a secure random integer between 1 and 6
function rollDice() {
  // randomInt(min, max) -> min inclusive, max exclusive
  return crypto.randomInt(1, 7);
}

// Number of rolls can be passed as a CLI argument, default is 1
const rolls = parseInt(process.argv[2]) || 1;
const history = [];

log(`Rolling dice ${rolls} time(s)...`);

for (let i = 1; i <= rolls; i++) {
  const value = rollDice();
  history.push(value);
  console.log(`Roll ${i}: Dice Rolled: ${value}`);
}

log(`Roll history: [${history.join(', ')}]`);

