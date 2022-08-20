// npm = package, dependency, module all means the same thing
// npm enables us
// 1.reuse our own code in other projects
// 2.use code written by other developers
// 3.our own solutions with other developer
// if publish package then name has been unique

// package.json - manifest file (store imp info about our project/package)
// npm init (step by step,press enter to skip)
// npm init -y(everything default ,suggested)
// npm i packageName
// npm i -g packageName

//if any dependency use other packages that automatically installed like bootstrap install with jquery and popper.js in node modules

// use package
const _ = require("lodash");
const items = [1, [2, [3, [4]]]];
// flattenDeep here method of lodash
const newItems = _.flattenDeep(items);
console.log(newItems);
