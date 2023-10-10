const util = require("./util");
const DEFAULT_FILE_NAME = "file.txt";

exports.getDate = (res, name) => {
  const now = util.now();
  res.writeHead(200, { "Content-Type": "text/html" });
  res.write(
    `<h1 style='color: blue'>Hello ${name}! What a beatiful day. Server date and time is ${now} </h1>`
  );
  res.end();
};

exports.writer = (data, res) => {
  util.writer(DEFAULT_FILE_NAME, data);
  res.writeHead(200, { "Content-Type": "text/html" });
  res.write(`${data} written to file.txt`);
  res.end();
};

exports.reader = async (fileName, res) => {
  try {
    const text = await util.reader(fileName);
    res.writeHead(200, { "Content-Type": "text/html" });
    res.write(`<h1 style='color: blue'>${text}</h1>`);
    res.end();
  } catch (err) {
    res.writeHead(404, { "Content-Type": "text/html" });
    res.write(`404: ${fileName} not found`);
    res.end();
  }
};

exports.notFound = (res) => {
  res.writeHead(404, { "Content-Type": "text/html" });
  res.write("404");
  res.end();
};
