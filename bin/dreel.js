#!/usr/bin/env node
const fs = require("fs");
const { generateTree } = require("../lib");
const dirPath = process.argv[2];
// if dirPath is undefined, print error message and exit
if (!dirPath) {
    console.log("Please provide a directory path.");
    process.exit(1);
}
// if dirPath is not a directory, print error message and exit
if (!fs.statSync(dirPath).isDirectory()) {
    console.log("Please provide a directory path.");
    process.exit(1);
}
// Flag omit git files, if present, can be in any position
const omitGit = process.argv.includes("--omit-git");
// Flag omit hidden files, if present, can be in any position
const omitHidden = process.argv.includes("--omit-hidden");
// Flag omit node_modules, if present, can be in any position
const omitNodeModules = process.argv.includes("--omit-node-modules");
// Flag omit all files, if present, can be in any position
const omitAll = process.argv.includes("--omit-all-files");

const config = {
    omitGit,
    omitHidden,
    omitNodeModules,
    omitAll,
};

generateTree(config, dirPath);