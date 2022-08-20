// Node uses CommonJS Library,every file is module (by default)
// Modules - Encapsulated Code (only share Minimum)
// import module only when need to invoke
// not need to export module when invoked in own module

// import modules
const names = require("./3.1-names");
// console.log(names);

const sayHi = require("./3.2-utils");

sayHi("Burhan");
sayHi(names.adan);
sayHi(names.raffay);

// From Suggested Syntax
const info = require("./3.3-suggested-flavor");
console.log(info);
console.log(info.items);
console.log(info.items[0]);
console.log(info.items[1]);
console.log(info.person);
console.log(info.person.name);

// From Alternative Syntax
const data = require("./3.4-alternative-flavor");
console.log(data);
console.log(data.items);
console.log(data.items[0]);
console.log(data.items[1]);
console.log(data.singlePerson);
console.log(data.singlePerson.name);

// no need to assign variable then invoked them bcz fun invoked in own module
require("./3.5-mind-gernade");

const { add, sub, mul, div } = require("./3.6-math");
console.log(add(2, 3));
console.log(sub(2, 3));
console.log(mul(2, 3));
console.log(div(2, 3));
