const fs = require("fs");
const util = require("util");

exports.writer = (fileName, data) => {
  fs.writeFile(fileName, data, { flag: "a", encoding: "utf-8" }, (err) => {
    if (err) throw err;
  });
  console.log("The file has been saved!");
};

exports.reader = async (fileName) => {
  const path = "./" + fileName;
  try {
    const readFilePromise = util.promisify(fs.readFile);
    const data = await readFilePromise(path, "utf8");
    return data;
  } catch (err) {
    throw err;
  }
};

exports.now = () => {
  return new Date();
};
