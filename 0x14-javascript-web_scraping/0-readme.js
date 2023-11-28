#!/usr/bin/node
const fs = require('fs');

function readAndPrintFile(filePath) {
    fs.readFile(filePath, 'utf-8', (err, data) => {
        if (err) {
            console.error(`An error occurred: ${err}`);
        } else {
            console.log(data);
        }
    });
}

// Check if the correct number of command-line arguments is provided
if (process.argv.length !== 3) {
    console.log('Usage: node script_name.js <file_path>');
} else {
    // Get the file path from the command-line arguments
    const filePath = process.argv[2];

    // Call the function to read and print the file content
    readAndPrintFile(filePath);
}
