// modules/logger.js
// Custom logger module - prints a timestamped log message

function log(message) {
  const timestamp = new Date().toISOString();
  console.log(`[${timestamp}] ${message}`);
}

// Export the function so other files can reuse it
module.exports = log;
