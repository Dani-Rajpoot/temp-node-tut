// https://nodejs.org/dist/latest-v16.x/docs/api/fs.html
const { readFileSync, writeFileSync } = require("fs");

console.log("start");
const first = readFileSync("./content/first.txt", "utf8");
const second = readFileSync("./content/second.txt", "utf8");

console.log(first, second);

// flag :a mean append mean new data attach with previous
writeFileSync(
  "./content/result-sync.txt",
  `Here is The Result of : ${first} , ${second}`,
  { flag: "a" }
);
console.log("end task");
console.log("start new line");
