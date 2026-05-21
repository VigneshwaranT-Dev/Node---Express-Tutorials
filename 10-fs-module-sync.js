const fs = require("fs");

const content1 = fs.readFileSync("./content/test1.txt", "utf8");
const content2 = fs.readFileSync("./content/test2.txt", "utf8");

console.log(content1);
console.log(content2);

// fs.writeFileSync(
//   "./content/test1.txt",
//   "\nLets Master the Node & Express JS.",
//   { flag: "a" },
// );

if (fs.existsSync("./content/test11.txt")) {
  console.log(fs.readFileSync("./content/test1.txt", "utf8"));
} else {
  console.log("File Not Found");
}
