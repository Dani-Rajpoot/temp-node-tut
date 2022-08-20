const fs = require("fs");
const path = require("path");

const rs = fs.createReadStream(
  path.join(__dirname, "content", "lorem.txt"),
  "utf8"
);

const ws = fs.createWriteStream(
  path.join(__dirname, "content", "newLorem.txt")
);

// read data and write file with this data
rs.pipe(ws);
