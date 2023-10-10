const HTTP = require("http");
const PORT = process.env.PORT || 3000;
const url = require("url");
const webWriter = require("./modules/webWriter");

HTTP.createServer((req, res) => {
  const query = url.parse(req.url, true);
  const path = query.pathname;
  const readPath = "/COMP4537/labs/3/readFile/";

  if (path === "/COMP4537/labs/3/getDate/") {
    webWriter.getDate(res, query.query["name"]);
  } else if (path === "/COMP4537/labs/3/writeFile/") {
    const text = query.query["text"];
    webWriter.writer(text, res);
  } else if (path.includes(readPath)) {
    const paths = query.pathname.split("/");
    const fileName = paths[paths.length - 1];
    webWriter.reader(fileName, res);
  } else {
    webWriter.notFound(res);
  }
}).listen(PORT);

console.log(`Server running at http://localhost:${PORT}/`);
