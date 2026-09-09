// fileManager.js
// A file manager using the fs module: Create, Read, Update, Delete
// Run with: node fileManager.js

const fs = require('fs');
const log = require('./modules/logger');

const filePath = './test.txt';

// 1. CREATE
function createFile() {
  log('Creating File...');
  fs.writeFile(filePath, 'Hello Node.js', (err) => {
    if (err) {
      return log(`Error creating file: ${err.message}`);
    }
    log('File Created');
    readFile();
  });
}

// 2. READ
function readFile() {
  log('Reading File');
  fs.readFile(filePath, 'utf8', (err, data) => {
    if (err) {
      return log(`Error reading file: ${err.message}`);
    }
    console.log(data);
    updateFile();
  });
}

// 3. UPDATE (append)
function updateFile() {
  fs.appendFile(filePath, '\nLearning FS Module', (err) => {
    if (err) {
      return log(`Error updating file: ${err.message}`);
    }
    log('File Updated');
    fs.readFile(filePath, 'utf8', (err, data) => {
      if (err) return log(`Error reading file: ${err.message}`);
      console.log(data);
      deleteFile();
    });
  });
}

// 4. DELETE
function deleteFile() {
  fs.unlink(filePath, (err) => {
    if (err) {
      // Handle missing file gracefully
      if (err.code === 'ENOENT') {
        return log('File not found, nothing to delete.');
      }
      return log(`Error deleting file: ${err.message}`);
    }
    log('File Deleted');
  });
}

// Kick off the CRUD demo
createFile();

/*
Sample Terminal Output:

Creating File...
File Created
Reading File
Hello Node.js
File Updated
Hello Node.js
Learning FS Module
File Deleted
*/
