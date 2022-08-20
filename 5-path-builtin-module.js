// https://nodejs.org/api/path.html

const path = require("path");

const filePath = path.join("/content/", "subfolder", "test.txt");
console.log(filePath);

const base = path.basename(filePath);
console.log(base);

const absolute = path.resolve(__dirname, "content", "subfolder", "test.txt");
console.log(absolute);

console.log(path.basename);
console.log(path.delimiter);
console.log(path.dirname);
console.log(path.extname);
console.log(path.format);
console.log(path.isAbsolute);
console.log(path.join);
console.log(path.normalize);
console.log(path.parse);
console.log(path.posix);
console.log(path.relative);
console.log(path.resolve);
console.log(path.sep);
console.log(path.toNamespacedPath);
console.log(path.win32);
