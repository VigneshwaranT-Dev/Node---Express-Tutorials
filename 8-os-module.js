const os = require("os");

// Info about current OS user
const user = os.userInfo();
console.log(user);

// Method returns the system uptime in seconds.
// (System uptime refers to the amount of time a computer, server, or system has been running
// continuously without shutting down or restarting.)
console.log(`The System Uptime is ${os.uptime()} seconds`);

// Some other OS accessing methods.
const currentOsData = {
  name: os.type(), // OS name (Linux, Windows_NT, Darwin)
  platform: os.platform(), // 'linux', 'win32', 'darwin' — more specific than os.type()
  arch: os.arch(), // CPU architecture: 'x64', 'arm', 'arm64'
  cpu: os.cpus(), // Array of CPU core info (model, speed, times)
  hostName: os.hostname(), // Machine's hostname
  tempDir: os.tmpdir(), // OS temp directory path
  release: os.release(), // OS version/release string
  networkInterfaces: os.networkInterfaces(), // Network interfaces with IP addresses (useful for finding local IP)
  totalMem: os.totalmem(), // Total RAM in bytes
  freeMem: os.freemem(), // Available RAM in bytes
  eol: os.EOL, // End-of-line marker ('\n' on Unix, '\r\n' on Windows)
};

console.log(currentOsData);
