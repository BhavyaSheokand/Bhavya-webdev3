// calculator.js
// A simple CLI-based calculator using process.argv
// Example: node calculator.js add 10 5

const log = require('./modules/logger');

// process.argv[0] = node path
// process.argv[1] = script path
// process.argv[2] = operation
// process.argv[3], process.argv[4] = operands

const operation = process.argv[2];
const num1 = parseFloat(process.argv[3]);
const num2 = parseFloat(process.argv[4]);

function calculate(op, a, b) {
  if (isNaN(a) || isNaN(b)) {
    return 'Error: Please provide two valid numbers.';
  }

  switch (op) {
    case 'add':
      return a + b;
    case 'sub':
      return a - b;
    case 'mul':
      return a * b;
    case 'div':
      if (b === 0) {
        return 'Error: Division by zero is not allowed.';
      }
      return a / b;
    default:
      return `Error: Invalid operation "${op}". Use add, sub, mul, or div.`;
  }
}

if (!operation) {
  console.log('Usage: node calculator.js <add|sub|mul|div> <num1> <num2>');
} else {
  log(`Performing operation: ${operation} (${num1}, ${num2})`);
  const result = calculate(operation, num1, num2);
  console.log('Result:', result);
}

