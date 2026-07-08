const fs = require("fs");
console.log("reading file");
//let data = fs.readFileSync("mytxtfile.txt", "utf8");
fs.readFile("mytxtfile.txt", "utf8", (error, data) => console.log(data));

console.log("read file");
