#!/usr/bin/env node

const fs = require('fs');
const path = require('path');
const { Command } = require('commander');

// Initialize commander
const program = new Command();

program
  .name('word-counter')
  .description('A CLI tool to count the number of words in a file')
  .version('1.0.0');

// Define the command to count words in the specified file
program
  .argument('<filePath>', 'path to the file')
  .action((filePath) => {
    // Check if file exists
    if (!fs.existsSync(filePath)) {
      console.error('File does not exist!');
      process.exit(1);
    }

    // Read the file content
    fs.readFile(filePath, 'utf-8', (err, data) => {
      if (err) {
        console.error('Error reading the file:', err);
        process.exit(1);
      }

      // Count the number of words in the file
      const wordCount = data.split(/\s+/).filter(Boolean).length;
      console.log(`The file contains ${wordCount} words.`);
    });
  });

// Parse the command-line arguments
program.parse();
