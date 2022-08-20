// suggested use always asynchronously
// callback run when functionality done like events

// import { readFile } from "node:fs";
const { readFile, writeFile } = require("fs");
const fs = require("fs");

console.log("start");

readFile("./content/first.txt", "utf-8", (err, result) => {
  if (err) {
    console.log(err);
    return;
  }
  const first = result;

  readFile("./content/second.txt", "utf-8", (err, result) => {
    if (err) {
      console.log(err);
      return;
    }
    const second = result;

    writeFile(
      "./content/result-async.txt",
      `Here is The Result of : ${first} , ${second}`,
      (err, result) => {
        if (err) {
          console.log(err);
          return;
        }
        console.log(result);
        console.log("end task");
      }
    );
  });
});
console.log("start new line");
