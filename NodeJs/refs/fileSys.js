// File system modules

const fs = require('fs');
const path = require('path');

// Create a new folder
const p = path.join(__dirname, 'test')
fs.mkdir(p, {}, () => console.log('Folder created'));

// File writing
fs.writeFile( path.join(__dirname, 'new.txt'), 'file written', 
    () => {
        
        console.log('file wrtie complete');
        // call back
        fs.appendFile('new.txt', 'file append complete', () =>
        console.log('file append complete'));

    }
)

// Read file
fs.readFile(path.join(__dirname, 'readFile.txt'), 'utf8', (err, data) => {
    if(err) throw err;
    console.log(data)
})