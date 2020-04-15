const path = require('path')

// Base name
// Gets the base file name

const filename = path.basename(__filename);

// Get parent directory name
const dirName = path.dirname(__filename);

// Get file extention
const ext = path.extname(__filename);

// Concatinate path
const conPath = path.join(path.basename(__dirname), 'tests', 'index.html')
console.log(conPath)

