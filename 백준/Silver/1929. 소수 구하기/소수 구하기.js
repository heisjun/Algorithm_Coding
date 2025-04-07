let input = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split(" ")
  .map(Number);
const [M, N] = input;

for (let i = M; i <= N; i++) {
  let dec = true;
  for (let j = 2; j <= Math.sqrt(i); j++) {
    if (i % j === 0) {
      dec = false;
    }
  }
  if (i !== 1 && dec) {
    console.log(i);
  }
}
