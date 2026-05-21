const fs = require("fs");

fs.readFile("./content/test2.txt", "utf8", (err, res) => {
  if (err) {
    console.log(err);
    return;
  }

  const content1 = res;

  fs.readFile("./content/test1.txt", "utf8", (err, res) => {
    if (err) {
      console.log(err);
      return;
    }

    const content2 = res;

    fs.writeFile(
      "./content/combinedFile.txt",
      `This is the combined file from test1 and test2 files the result is: \n${content1}, \n${content2}`,
      // { flag: "a" },
      (err) => {
        if (err) {
          console.log(err);
          return;
        }

        fs.readFile("./content/combinedFile.txt", "utf8", (err, res) => {
          console.log(res);
        });
      },
    );
  });
});

fs.access("./content/combinedFiles.txt", (err, res) => {
  if (err) {
    console.log(err);
    console.log("File NOT Exists");
    return;
  }

  console.log("File Exists");
});
