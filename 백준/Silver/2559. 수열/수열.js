const input = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n");

const [N, K] = input.shift().split(" ").map(Number);
const days = input[0].split(" ").map(Number);

let hapArr = [];

for (let i = 0; i <= N - K; i++) {
  let hap = 0;
  for (let j = i; j < K + i; j++) {
    hap += days[j];
  }
  hapArr.push(hap);
}

console.log(Math.max(...hapArr));
