// Global Objects
// module -info about current module(file)
// process -info about environment where the program is being executed

// Path To Current Directory
console.log(__dirname);

// -Filename with directory
console.log(__filename);

//require - Function to use modules(CommonJS)
const os = require("os");
console.log(os.type());
console.log(os.version());
console.log(os.homedir());

// play with current file
const path = require("path");
console.log(path.dirname(__filename));
console.log(path.basename(__filename));
console.log(path.extname(__filename));
console.log(path.parse(__filename));


