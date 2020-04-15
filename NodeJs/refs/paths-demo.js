const path = require('path')

// Base name
// Gets the base file name

const filename = path.basename(__filename);
const dirName = path.dirname(__filename);
const ext = path.extname(__filename);

console.log(ext)

