const input = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split(" ");

const N = +input.shift();
const K = +input.shift();

const dp = new Array(N + 1).fill(Infinity);
dp[0] = 0;

for (let i = 0; i < N; i++) {
  if (i + 1 <= N) {
    dp[i + 1] = Math.min(dp[i + 1], dp[i] + 1);
  }
  if (i + Math.floor(i / 2) <= N) {
    dp[i + Math.floor(i / 2)] = Math.min(dp[i + Math.floor(i / 2)], dp[i] + 1);
  }
}

console.log(dp[N] <= K ? "minigimbob" : "water");
