# Node.js — Built-in Modules Notes

> Personal reference notes covering Node.js built-in modules, globals, and NPM — with examples for every method. Interview-ready.

---

## Table of Contents

- [Built-in Modules](#built-in-modules)
- [CommonJS](#commonjs)
- [Globals](#globals)
- [OS Module](#os-module)
- [Path Module](#path-module)
- [FS Module — Sync](#fs-module--sync)
- [FS Module — Async](#fs-module--async)
- [Sync vs Async — Interview Prep](#sync-vs-async--interview-prep)
- [HTTP Module](#http-module)
- [NPM](#npm)

---

## Built-in Modules

1. OS (Operating System)
2. Path
3. FS (File System)
4. HTTP

---

## CommonJS

- Every file is a **Module** by default
- Modules = Encapsulated code (only share minimum)

---

## Globals

> No `window` object in Node.js — these are the global variables available instead.

**`__dirname`** — Path to current directory

```js
console.log(__dirname); // → C:\Users\Vigneshwaran\project
```

**`__filename`** — Current file name

```js
console.log(__filename); // → C:\Users\Vigneshwaran\project\index.js
```

**`require`** — Function to use modules (CommonJS)

```js
const fs = require("fs");
```

**`module`** — Info about current module

```js
console.log(module); // → { id: '.', filename: '...', exports: {}, ... }
```

**`process`** — Info about env where the program is being executed

```js
console.log(process.env.NODE_ENV); // → development or production
```

---

## OS Module

> `8-os-module.js` — To access OS related functions

### 1. `os.userInfo()`

Info about current OS user.

```js
console.log(os.userInfo());
// → { username: 'Vigneshwaran', homedir: 'C:\\Users\\Vigneshwaran', ... }
```

### 2. `os.uptime()`

Returns the system uptime in seconds.

```js
console.log(os.uptime()); // → 3600  (means system running for 1 hour)
```

### 3. `os.type()`

OS name.

```js
console.log(os.type()); // → Windows_NT  or  Linux  or  Darwin
```

### 4. `os.platform()`

More specific than `os.type()`.

```js
console.log(os.platform()); // → win32  or  linux  or  darwin
```

### 5. `os.arch()`

CPU architecture.

```js
console.log(os.arch()); // → x64  or  arm  or  arm64
```

### 6. `os.cpus()`

Array of CPU core info (model, speed, times).

```js
console.log(os.cpus().length); // → 8  (number of CPU cores)
```

### 7. `os.hostname()`

Machine's hostname.

```js
console.log(os.hostname()); // → DESKTOP-ABC123
```

### 8. `os.tmpdir()`

OS temp directory path.

```js
console.log(os.tmpdir()); // → C:\Users\Vigneshwaran\AppData\Local\Temp
```

### 9. `os.release()`

OS version/release string.

```js
console.log(os.release()); // → 10.0.19045
```

### 10. `os.networkInterfaces()`

Network interfaces with IP addresses (useful for finding local IP).

```js
console.log(os.networkInterfaces());
// → { Ethernet: [ { address: '192.168.1.5', ... } ] }
```

### 11. `os.totalmem()`

Total RAM in bytes.

```js
console.log(os.totalmem()); // → 8589934592  (8GB in bytes)
```

### 12. `os.freemem()`

Available RAM in bytes.

```js
console.log(os.freemem()); // → 2147483648  (2GB free)
```

### 13. `os.EOL`

End-of-line marker (`\n` on Unix, `\r\n` on Windows).

```js
fs.writeFileSync("file.txt", "Line1" + os.EOL + "Line2");
// Writes correct line endings based on OS
```

---

## Path Module

> `9-path-module.js` — To access path related functions

### 1. `path.sep`

Gives you the OS-specific file path separator.

```js
console.log(path.sep);
// → /   on Linux/Mac
// → \   on Windows
```

### 2. `path.basename()`

Returns the last portion of a path (file or folder name).

```js
path.basename("C:\\Users\\Vigneshwaran\\file.txt"); // → file.txt
path.basename("C:\\Users\\Vigneshwaran\\file.txt", ".txt"); // → file
```

### 3. `path.join()`

Just joins segments, no absolute path logic.

```js
path.join("folder", "subfolder", "file.txt");
// → folder\subfolder\file.txt
```

### 4. `path.resolve()`

Always returns an absolute path.

```js
path.resolve("folder", "file.txt");
// → C:\Users\Vigneshwaran\project\folder\file.txt

path.resolve(__dirname, "config", "db.json");
// → C:\Users\Vigneshwaran\project\config\db.json
```

### 5. `path.dirname()`

Returns the directory part of a path.

```js
path.dirname("folder\\subfolder\\file.txt");
// → folder\subfolder
```

### 6. `path.extname()`

Returns the file extension.

```js
path.extname("file.txt"); // → .txt
path.extname("file.tar.gz"); // → .gz  (only the last extension)
path.extname("file"); // → ''   (no extension)
```

### 7. `path.parse()`

Breaks a path into an object.

```js
path.parse("folder\\subfolder\\file.txt");
// → {
//     root: '',
//     dir:  'folder\\subfolder',
//     base: 'file.txt',
//     ext:  '.txt',
//     name: 'file'
//   }
```

### 8. `path.format()`

Opposite of `parse()` — builds a path from an object.

```js
path.format({ dir: "folder\\subfolder", name: "file", ext: ".txt" });
// → folder\subfolder\file.txt
```

### 9. `path.isAbsolute()`

Checks if a path is absolute. Returns `true` or `false`.

```js
path.isAbsolute("C:\\Users\\Vigneshwaran\\file.txt"); // → true
path.isAbsolute("./file.txt"); // → false
path.isAbsolute("file.txt"); // → false
```

---

## FS Module — Sync

> `10-fs-module-sync.js` — To access File System related functions

### 1. `readFileSync(path, encoding)`

Reads a file synchronously and returns its content.

```js
const data = fs.readFileSync("file.txt", "utf8");
console.log(data); // → Hello World
```

### 2. `writeFileSync(path, content, options)`

Writes content to a file synchronously. Overwrites by default.
Pass `{ flag: 'a' }` to append instead of overwrite.

```js
fs.writeFileSync("file.txt", "Hello World");
fs.writeFileSync("file.txt", "New Line", { flag: "a" }); // append
```

### 3. `existsSync(path)`

Checks if a file or folder exists. Returns `true` or `false`.
Always use this before reading or writing to avoid errors.

```js
if (fs.existsSync("file.txt")) {
  console.log("File Exists");
} else {
  console.log("File Not Exists");
}
```

### 4. `mkdirSync(path, options)`

Creates a new folder synchronously.
Pass `{ recursive: true }` to create nested folders without error if already exists.

```js
fs.mkdirSync("myFolder");
fs.mkdirSync("myFolder/sub/deep", { recursive: true });
```

### 5. `rmdirSync(path)`

Removes an **empty** folder synchronously.
For folders with files inside, use `rmSync` with `recursive`.

```js
fs.rmdirSync("myFolder");
fs.rmSync("myFolder", { recursive: true }); // for non-empty folders
```

### 6. `unlinkSync(path)`

Deletes a **file** synchronously. Only works on files, not folders.

```js
fs.unlinkSync("file.txt");
```

### 7. `renameSync(oldPath, newPath)`

Renames or moves a file/folder synchronously.
If `newPath` is in a different folder, it acts as a move.

```js
fs.renameSync("old.txt", "new.txt"); // rename
fs.renameSync("file.txt", "folder/file.txt"); // move
```

### 8. `copyFileSync(src, dest)`

Copies a file from `src` to `dest` synchronously. Overwrites dest if it already exists.

```js
fs.copyFileSync("file.txt", "copy-of-file.txt");
```

### 9. `readdirSync(path)`

Reads a folder and returns an array of file/folder names inside it.

```js
const files = fs.readdirSync("./myFolder");
console.log(files); // → ['file1.txt', 'file2.txt', 'subfolder']
```

### 10. `statSync(path)`

Returns info (metadata) about a file or folder.

```js
const stats = fs.statSync("file.txt");
console.log(stats.isFile()); // → true
console.log(stats.isDirectory()); // → false
console.log(stats.size); // → 1024  (bytes)
```

---

## FS Module — Async

> `11-fs-module-async.js` — Async methods use Callbacks and don't block code execution

### 1. `readFile(path, encoding, callback)`

Reads a file asynchronously. Callback receives `(err, data)`.

```js
fs.readFile("file.txt", "utf8", (err, data) => {
  if (err) {
    console.log("Error:", err.message);
    return;
  }
  console.log(data); // → Hello World
});
```

### 2. `writeFile(path, content, options, callback)`

Writes content to a file asynchronously. Overwrites by default.
Pass `{ flag: 'a' }` to append instead of overwrite.

```js
fs.writeFile("file.txt", "Hello World", (err) => {
  if (err) {
    console.log("Error:", err.message);
    return;
  }
  console.log("File written successfully");
});
```

### 3. `exists()` — ⚠️ DEPRECATED

Use `existsSync()` or `fs.access()` instead.

### 4. `mkdir(path, options, callback)`

Creates a new folder asynchronously.
Pass `{ recursive: true }` to create nested folders without error if already exists.

```js
fs.mkdir("myFolder", { recursive: true }, (err) => {
  if (err) {
    console.log("Error:", err.message);
    return;
  }
  console.log("Folder created");
});
```

### 5. `rmdir(path, callback)`

Removes an **empty** folder asynchronously.
For folders with files inside, use `rm` with `recursive`.

```js
fs.rmdir("myFolder", (err) => {
  console.log("Removed");
});
fs.rm("myFolder", { recursive: true }, (err) => {
  console.log("Removed");
});
```

### 6. `unlink(path, callback)`

Deletes a **file** asynchronously. Only works on files, not folders.

```js
fs.unlink("file.txt", (err) => {
  if (err) {
    console.log("Error:", err.message);
    return;
  }
  console.log("File deleted");
});
```

### 7. `rename(oldPath, newPath, callback)`

Renames or moves a file/folder asynchronously.
If `newPath` is in a different folder, it acts as a move.

```js
fs.rename("old.txt", "new.txt", (err) => {
  if (err) {
    console.log("Error:", err.message);
    return;
  }
  console.log("File renamed");
});
```

### 8. `copyFile(src, dest, callback)`

Copies a file from `src` to `dest` asynchronously. Overwrites dest if it already exists.

```js
fs.copyFile("file.txt", "copy.txt", (err) => {
  if (err) {
    console.log("Error:", err.message);
    return;
  }
  console.log("File copied");
});
```

### 9. `readdir(path, callback)`

Reads a folder and returns an array of file/folder names inside it.

```js
fs.readdir("./myFolder", (err, files) => {
  if (err) {
    console.log("Error:", err.message);
    return;
  }
  console.log(files); // → ['file1.txt', 'file2.txt']
});
```

### 10. `stat(path, callback)`

Returns info (metadata) about a file or folder asynchronously.

```js
fs.stat("file.txt", (err, stats) => {
  if (err) {
    console.log("Error:", err.message);
    return;
  }
  console.log(stats.isFile()); // → true
  console.log(stats.size); // → 1024
});
```

> **Always handle the error in every async callback:**
>
> ```js
> fs.readFile("file.txt", "utf8", (err, data) => {
>   if (err) {
>     console.log("Error:", err.message);
>     return;
>   }
>   console.log(data);
> });
> ```

---

## Sync vs Async — Interview Prep

### What is Sync?

- Executes line by line. Blocks the next line until current finishes.
- Simple to read and write.
- Bad for servers — blocks the entire app while waiting.

### What is Async?

- Non-blocking. Moves to next line without waiting for result.
- Result comes back later via callback.
- Good for servers — handles multiple users without blocking.

### Code Example

```js
// SYNC — blocks code
const data = fs.readFileSync("file.txt", "utf8");
console.log(data);
console.log("This runs AFTER file is read");

// ASYNC — non-blocking
fs.readFile("file.txt", "utf8", (err, data) => {
  console.log(data);
});
console.log("This runs BEFORE file is read"); // ← runs first
```

### When to use Sync

- Simple one-time scripts
- CLI tools
- Loading config files at app startup (runs once, before server starts)

### When to use Async

- Servers and APIs
- Anything handling multiple users at the same time
- Never block the event loop inside a running server!

### `existsSync()` vs `fs.access()`

|          | `existsSync()`          | `fs.access()`                    |
| -------- | ----------------------- | -------------------------------- |
| Type     | Sync                    | Async                            |
| Returns  | `true` / `false`        | Nothing (uses callback)          |
| Use with | `if/else`               | callback — `err` means not found |
| Best for | Simple existence checks | Checking file permissions        |

### ⭐ Most Asked Interview Point

> **"Why should you never use Sync methods inside a Node.js server?"**
>
> Node.js is single-threaded. A sync method blocks the entire event loop, meaning **no other requests can be handled** until it finishes. Async keeps the event loop free to handle multiple requests.

---

## HTTP Module

> `12-http-module.js` — To create servers and make HTTP requests

### 1. `http.createServer(callback)`

Creates an HTTP server. Callback receives `(req, res)` on every incoming request.

```js
const server = http.createServer((req, res) => {
  res.end("Hello World");
});
```

### 2. `server.listen(port, hostname, callback)`

Starts the server and listens for incoming requests on given port.
`hostname` is optional (defaults to localhost).

```js
server.listen(3000, () => {
  console.log("Server running on port 3000");
});
```

---

### Request Object (`req`)

### 3. `req.url`

Returns the URL path of the incoming request.

```js
// User visits → http://localhost:3000/about
console.log(req.url); // → /about
```

### 4. `req.method`

Returns the HTTP method of the request.

```js
console.log(req.method); // → GET, POST, PUT, DELETE
```

### 5. `req.headers`

Returns all request headers as an object.

```js
console.log(req.headers);
// → { 'content-type': 'application/json', host: 'localhost:3000', ... }
```

---

### Response Object (`res`)

### 6. `res.writeHead(statusCode, headers)`

Sets the status code and response headers.
Always call this **BEFORE** `res.write()` or `res.end()`.

```js
res.writeHead(200, { "Content-Type": "text/html" });
```

### 7. `res.write(data)`

Sends a chunk of response body. Can be called multiple times before `res.end()`.

```js
res.write("<h1>Hello</h1>");
res.write("<p>Welcome</p>");
res.end();
```

### 8. `res.end(data)`

Signals the response is complete. Optionally send final data.
**MUST always be called**, otherwise the request hangs forever.

```js
res.end("<h1>Hello World</h1>");
```

### 9. `res.statusCode`

Sets the status code directly without `writeHead`.

```js
res.statusCode = 404;
res.end("Not Found");
```

---

### Making HTTP Requests

### 10. `http.get(url, callback)`

Makes a simple GET request to a URL.

```js
http.get("http://example.com", (response) => {
  console.log(response.statusCode); // → 200
});
```

### 11. `http.request(options, callback)`

Makes any type of HTTP request (GET, POST, PUT, DELETE). More flexible than `http.get()`.

```js
const req = http.request(
  { hostname: "example.com", method: "POST", path: "/api" },
  (res) => {
    console.log(res.statusCode);
  },
);
req.end();
```

---

### Basic Server Example ⭐ Most asked in interviews

```js
const http = require("http");

const server = http.createServer((req, res) => {
  if (req.url === "/" && req.method === "GET") {
    res.writeHead(200, { "Content-Type": "text/html" });
    res.end("<h1>Home Page</h1>");
  } else if (req.url === "/about" && req.method === "GET") {
    res.writeHead(200, { "Content-Type": "text/html" });
    res.end("<h1>About Page</h1>");
  } else {
    res.writeHead(404, { "Content-Type": "text/html" });
    res.end("<h1>Page Not Found</h1>");
  }
});

server.listen(3000, () => {
  console.log("Server running on port 3000");
});
```

### Important Interview Points

1. `res.end()` must always be called — otherwise the request hangs forever.
2. `res.writeHead()` must be called **BEFORE** `res.write()` or `res.end()`.
3. `req.url` gives only the path, not the full URL.
   - For `http://localhost:3000/about` → `req.url` = `/about`
4. HTTP module is low-level — in real projects, **Express.js** is used on top of it.

### Common Status Codes

| Code | Meaning                |
| ---- | ---------------------- |
| 200  | OK (success)           |
| 201  | Created (POST success) |
| 400  | Bad Request            |
| 401  | Unauthorized           |
| 403  | Forbidden              |
| 404  | Not Found              |
| 500  | Internal Server Error  |

---

## NPM

> Node Package Manager — manages packages/libraries for your Node.js project

### Initializing a Project

#### `npm init`

Creates a `package.json` by asking questions step by step.

```bash
npm init
# Asks: package name, version, description, entry point, etc.
```

#### `npm init -y`

Creates a `package.json` instantly with default values. ✅ Recommended

```bash
npm init -y
# → Creates package.json with all defaults, no questions asked
```

---

### Installing Packages

#### `npm install <package>` (shorthand: `npm i <package>`)

Installs a package locally. Adds it under `dependencies` in `package.json`.
Used for packages needed in **production**.

```bash
npm install express
npm i express        # shorthand
```

#### `npm install <package> --save-dev` (shorthand: `npm i <package> -D`)

Installs a package as a Dev Dependency. Adds under `devDependencies`.
Used for packages only needed during **development**.

```bash
npm install nodemon --save-dev
npm i nodemon -D     # shorthand
```

#### `npm install -g <package>`

Installs a package **globally** on your machine. Available as a command anywhere.

```bash
npm install -g nodemon
npm install -g typescript
```

#### `npm install` (no package name)

Installs **ALL** packages listed in `package.json`.
Used when cloning a project (`node_modules` not included in git).

```bash
npm install
# → Reads package.json and installs everything listed
```

---

### Uninstalling Packages

#### `npm uninstall <package>` (shorthand: `npm un <package>`)

Removes a package from `node_modules` and `package.json`.

```bash
npm uninstall express
npm un express       # shorthand
```

---

### Running Scripts

#### `npm run <script>`

Runs a custom script defined in `package.json` under `scripts`.

```bash
# In package.json:
"scripts": {
  "start": "node index.js",
  "dev":   "nodemon index.js",
  "test":  "jest"
}

npm run dev   # → runs nodemon index.js
npm run test  # → runs jest
```

#### `npm start`

Shortcut for running the `start` script. No need to type `run`.

```bash
npm start  # → runs "node index.js"
```

---

### Useful Commands

#### `npm list`

Shows all installed packages and their versions.

```bash
npm list
# → project@1.0.0
#   ├── express@4.18.2
#   └── nodemon@3.0.1
```

#### `npm outdated`

Shows which packages have newer versions available.

```bash
npm outdated
# → Package   Current   Wanted   Latest
#   express   4.18.0    4.18.2   4.18.2
```

#### `npm update`

Updates all packages to their latest allowed version.

```bash
npm update
npm update express  # update specific package
```

#### `npm audit`

Checks for security vulnerabilities in installed packages.

```bash
npm audit
npm audit fix       # automatically fix vulnerabilities
```

#### `npx <package>`

Runs a package **without installing it globally**. Great for one-time use tools.

```bash
npx create-react-app my-app
npx nodemon index.js
```

---

### `package.json` — Key Fields

```json
{
  "name": "my-project",
  "version": "1.0.0",
  "main": "index.js",
  "scripts": {
    "start": "node index.js",
    "dev": "nodemon index.js"
  },
  "dependencies": {
    "express": "^4.18.2"
  },
  "devDependencies": {
    "nodemon": "^3.0.1"
  }
}
```

---

### `dependencies` vs `devDependencies` ⭐ Interview Point

|              | `dependencies`            | `devDependencies`     |
| ------------ | ------------------------- | --------------------- |
| Used in      | Production + Development  | Development only      |
| Install flag | `npm i <pkg>`             | `npm i <pkg> -D`      |
| Examples     | express, mongoose, dotenv | nodemon, jest, eslint |

---

### Semantic Versioning (SemVer) ⭐ Interview Point

Version format → `MAJOR.MINOR.PATCH` (Example: `4.18.2`)

| Part  | Meaning                                    |
| ----- | ------------------------------------------ |
| MAJOR | Breaking changes. Existing code may break. |
| MINOR | New features added. Backward compatible.   |
| PATCH | Bug fixes only. Backward compatible.       |

**Symbols in `package.json`:**

| Symbol    | Example     | Allows                                    |
| --------- | ----------- | ----------------------------------------- |
| `^` Caret | `"^4.18.2"` | MINOR + PATCH updates `(4.x.x)` ← Default |
| `~` Tilde | `"~4.18.2"` | PATCH updates only `(4.18.x)`             |
| Exact     | `"4.18.2"`  | No updates. Exactly this version.         |

---

### `node_modules` & `package-lock.json` ⭐ Interview Point

**`node_modules/`**

- Folder where all installed packages are stored.
- ❌ NEVER push to git. Add to `.gitignore`.
- Anyone can recreate it with `npm install`.

**`package-lock.json`**

- Auto-generated by npm.
- Locks the **exact version** of every installed package.
- ✅ ALWAYS push to git — ensures everyone on the team gets same versions.

**`.gitignore` — always add:**

```
node_modules/
```
