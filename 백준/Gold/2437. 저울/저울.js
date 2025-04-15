const input = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n");

const N = +input.shift();

const weights = input[0]
  .split(" ")
  .map(Number)
  .sort((a, b) => a - b);

let hap = 1;
for (let i = 0; i < N; i++) {
  if (weights[i] > hap) {
    break;
  }
  hap += weights[i];
}

console.log(hap);
