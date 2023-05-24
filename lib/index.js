const fs = require("fs");
const path = require("path");

function generateTree(dirPath, prefix = "") {
  const files = fs.readdirSync(dirPath);

  files.forEach((file, index) => {
    const filePath = path.join(dirPath, file);
    const isDirectory = fs.statSync(filePath).isDirectory();
    const isFirst = index === files.length - 1;
    const prefixConnector = isFirst ? "└── " : "├── ";
    const indent = isFirst ? "    " : "│   ";
    process.stdout.write(prefix + prefixConnector + file + "\n");
    if (isDirectory) {
      const nestedPrefix = prefix + indent;
      generateTree(filePath, nestedPrefix);
    }
  });
}

module.exports = {
  generateTree,
};
