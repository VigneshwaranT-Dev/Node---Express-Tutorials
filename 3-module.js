// CommonJS - Every file is a Module (by default)
// Modules - Encapsulated code (only share minimum)

const names = require("./4-constNames");
const sayHi = require("./5-utils");
const data = require("./6-separateExports");

require("./7-sideEffects");
// This file has function here simple import also run that function called module side effects

sayHi("Vigneshwaran");
sayHi(names.name1);
sayHi(names.name2);

sayHi(data.singlePerson.name);

console.log(data.products);
