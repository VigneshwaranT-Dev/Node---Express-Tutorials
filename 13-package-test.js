const _ = require("lodash");

const nestedNumbs = [1, [2, [3, [4, [5, [6, [7, [8, [9, [10]]]]]]]]]];

console.log(nestedNumbs.flat(Infinity));

const flatNumbs = _.flatMapDeep(nestedNumbs);

console.log(flatNumbs);
