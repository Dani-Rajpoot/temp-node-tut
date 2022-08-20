// For Callback
// const fs = require("fs");
// For Promises
const fsPromises = require("fs").promises;
const path = require("path");

// fs.readFile(
//   path.join(__dirname, "content", "first.txt"),
//   "utf-8",
//   (err, data) => {
//     if (err) throw err;
//     console.log(data);
//   }
// );

// fs.writeFile(
//   path.join(__dirname, "content", "dave.txt"),
//   "Nice to Meet You",
//   (err) => {
//     if (err) throw err;
//     console.log("Write Complete");
//   }
// );

// Update File if not present append create it
// fs.appendFile(
//   path.join(__dirname, "content", "dani.txt"),
//   "\n\nRj Dani",
//   (err) => {
//     if (err) throw err;
//     console.log("Append Complete");
//   }
// );

// Update already Present File
// fs.appendFile(
//   path.join(__dirname, "content", "dave.txt"),
//   "\n\nDave Grey",
//   (err) => {
//     if (err) throw err;
//     console.log("Append Complete");
//   }
// );

// Write and Append at a time
// fs.writeFile(
//   path.join(__dirname, "content", "sample.txt"),
//   "Nice to Meet You",
//   (err) => {
//     if (err) throw err;
//     console.log("Write Complete");
//     fs.appendFile(
//       path.join(__dirname, "content", "sample.txt"),
//       "\n\nDave Grey",
//       (err) => {
//         if (err) throw err;
//         console.log("Append Complete");
//       }
//     );
//   }
// );

// Write, Append and rename at a time but it callback hell
// fs.writeFile(
//   path.join(__dirname, "content", "sample1.txt"),
//   "Nice to Meet You",
//   (err) => {
//     if (err) throw err;
//     console.log("Write Complete");

//     fs.appendFile(
//       path.join(__dirname, "content", "sample1.txt"),
//       "\n\nDave Grey",
//       (err) => {
//         if (err) throw err;
//         console.log("Append Complete");

//         fs.rename(
//           path.join(__dirname, "content", "sample1.txt"),
//           path.join(__dirname, "content", "sampleOne.txt"),
//           (err) => {
//             if (err) throw err;
//             console.log("Rename Complete");
//           }
//         );
//       }
//     );
//   }
// );

// Alternative & Suggested Method
const fileOps = async () => {
  try {
    const data = await fsPromises.readFile(
      path.join(__dirname, "content", "starter.txt"),
      "utf-8"
    );
    console.log(data);
    await fsPromises.unlink(path.join(__dirname, "content", "starter.txt"));
    await fsPromises.writeFile(
      path.join(__dirname, "content", "promiseWrite.txt"),
      data
    );
    await fsPromises.appendFile(
      path.join(__dirname, "content", "promiseWrite.txt"),
      "\n\nMERN Stack Developer"
    );
    await fsPromises.rename(
      path.join(__dirname, "content", "promiseWrite.txt"),
      path.join(__dirname, "content", "promiseComplete.txt")
    );
    const newData = await fsPromises.readFile(
      path.join(__dirname, "content", "promiseComplete.txt"),
      "utf-8"
    );
    console.log(newData);
  } catch (err) {
    console.error(err);
  }
};

fileOps();

// process.on("uncaughtException", (err) => {
//   console.error(`There was an uncaught ${err}`);
//   process.exit(1);
// });
