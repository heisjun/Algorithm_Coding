const input = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n");

const N = +input.shift();
const pattern = input.shift().split("*");

for (let i = 0; i < N; i++) {
  let tCase = input[i].replace(pattern[0], "F");
  tCase = tCase.replaceAll(pattern[1], "E");

  if (tCase.indexOf("F") === 0 && tCase.lastIndexOf("E") === tCase.length - 1) {
    console.log("DA");
  } else {
    console.log("NE");
  }
}
