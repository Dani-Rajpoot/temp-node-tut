const no1 = 5;
const no2 = 7;

function addVal() {
  console.log(`Sum Is : ${no1 + no2}`);
}

// Fun invoked in module code run
addVal();

// not need to export module when invoked in own module
