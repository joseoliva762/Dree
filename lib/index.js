#!/usr/bin/env node

const fs = require("fs");
const path = require("path");

/**
 * Prints the file or directory name.
 * @param {Object} fileInfo - File information object.
 * @param {string} fileInfo.prefix - Prefix to be used for indentation.
 * @param {string} fileInfo.file - File or directory name.
 * @param {string} fileInfo.prefixConnector - Prefix connector to be used.
 * @param {boolean} fileInfo.isDirectory - Flag to indicate if the file is a directory.
 * @param {string} fileInfo.indent - Indentation to be used.
 * @param {Object} config - Configuration object.
 * @param {boolean} config.omitGit - Flag to omit git files.
 * @param {boolean} config.omitHidden - Flag to omit hidden files.
 * @param {boolean} config.omitNodeModules - Flag to omit node_modules.
 * @param {boolean} config.omitAll - Flag to omit all files.
 * @returns {void}
 */
function print(fileInfo = {}, config) {
  const { indent, isDirectory, prefix, file, prefixConnector } = fileInfo;
  const isGit = file === ".git";
  const isHidden = file.startsWith(".");
  const isFile = !isDirectory;
  if (
    (config.omitGit && isGit) ||
    (config.omitHidden && isHidden) ||
    (config.omitAll && isFile)
  ) {
    return;
  }
  process.stdout.write(prefix + prefixConnector + file + "\n");
  if (isDirectory) {
    if (config.omitNodeModules && file === "node_modules") {
      return;
    }
    const nestedPrefix = prefix + indent;
    generateTree(config, fileInfo.filePath, nestedPrefix);
  }
}

/**
 * Generates a tree structure of the files and directories in the given path.
 * @param {Object} config - Configuration object.
 * @param {boolean} config.omitGit - Flag to omit git files.
 * @param {boolean} config.omitHidden - Flag to omit hidden files.
 * @param {boolean} config.omitNodeModules - Flag to omit node_modules.
 * @param {boolean} config.omitAll - Flag to omit all files.
 * @param {string} dirPath - Path to the directory.
 * @param {string} prefix - Prefix to be used for indentation.
 * @returns {void}
 */
function generateTree(config = {}, dirPath, prefix = "") {
  if (!fs.existsSync(dirPath)) {
    console.log("Directory does not exist.");
    return;
  }
  const files = fs.readdirSync(dirPath);
  if (files.length === 0) {
    process.stdout.write(prefix + "└── (empty)\n");
    return;
  }

  files.forEach((file, index) => {
    const filePath = path.join(dirPath, file);
    const isDirectory = fs.statSync(filePath).isDirectory();
    const isFirst = index === files.length - 1;
    const prefixConnector = isFirst ? "└── " : "├── ";
    const indent = isFirst ? "    " : "│   ";
    const fileInfo = {
      prefix,
      file,
      prefixConnector,
      isDirectory,
      indent,
      filePath,
    };
    print(fileInfo, config);
  });
}

module.exports = {
  generateTree,
};
