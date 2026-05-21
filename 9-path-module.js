const path = require("path");

// Example
// ❌ Bad — hardcoded, breaks on Windows
const badFilePath = "folder" + "/" + "file.txt";

// ✅ Good — works on any OS
const gudFilePath = "folder" + path.sep + "file.txt";

const filePath = path.join("folder", "subfolder", "file.txt");
// Linux/Mac → folder/subfolder/file.txt
// Windows   → folder\subfolder\file.txt

// On Linux/Mac → /
// On Windows   → \

console.log(path.sep);
console.log(badFilePath);
console.log(gudFilePath);
console.log(filePath);

// Base Name Examples

// When the last portion is a FILE
console.log(path.basename(filePath)); // → "file.txt" ✅

// When the last portion is a FOLDER
console.log(path.basename("/home/user/documents")); // → "documents"

// You can also strip the extension with a second argument
console.log(path.basename(filePath, ".txt")); // → "file"

// Join Examples

console.log(path.join("folder", "sub-folder", "file.txt")); // folder\sub-folder\file.txt

// Resolve Examples

console.log(path.resolve(__dirname, "folder", "sub-folder", "file.txt"));
// c:\Users\Vigneshwaran T\OneDrive\Desktop\Node & Express Tutorials\folder\sub-folder\file.txt

// dirName Examples

console.log(path.dirname(filePath));

// Parse Example

console.log(path.parse("folder\\subfolder\\file.txt"));

// format Example

console.log(
  path.format({
    dir: "folder\\subfolder",
    name: "file",
    ext: ".txt",
  }),
);

// IsAbsolute Example

console.log(
  path.isAbsolute(
    "c:\\Users\\Vigneshwaran T\\OneDrive\\Desktop\\Node & Express Tutorials\\folder\\sub-folder\\file.txt",
  ),
); // → true
path.isAbsolute("./file.txt"); // → false
path.isAbsolute("file.txt"); // → false
