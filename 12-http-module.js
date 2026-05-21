const http = require("http");

const app = http.createServer((req, res) => {
  if (req.url === "/") {
    return res.end("Hii Welcome to Home Page of Learn Node & Express JS");
  }

  if (req.url === "/about") {
    return res.end(`
      <h1>About Course</h1>
      <p>Welcome to the Node & Express JS course.</p>

      <h3>What You Will Learn:</h3>

      <ul>
        <li>Basics of Node.js</li>
        <li>Creating HTTP servers</li>
        <li>Working with modules</li>
        <li>Handling routes and requests</li>
        <li>Introduction to Express.js</li>
        <li>Building REST APIs</li>
        <li>Working with middleware</li>
        <li>Connecting with databases</li>
      </ul>

      <h3>Course Duration:</h3>
      <p>Beginner to Intermediate Level</p>

      <h3>Prerequisites:</h3>
      <p>Basic knowledge of JavaScript is enough.</p>
    `);
  }

  return res.end(`
    <h1>Oops!!!</h1>
    <h3>There doesn't seem to be any URL like this.</h3>

    <a href="/"> Back to Home </a>
  `);
});

app.listen(5000);
