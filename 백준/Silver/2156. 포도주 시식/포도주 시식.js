let input = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n");

const N = Number(input.shift());

const wine = input.map(Number);
dp = Array(N).fill(0);

function solution(N) {
  dp[1] = wine[0];
  dp[2] = wine[0] + wine[1];
  for (let i = 3; i <= N; i++) {
    dp[i] = Math.max(
      dp[i - 3] + wine[i - 2] + wine[i - 1],
      dp[i - 2] + wine[i - 1],
      dp[i - 1]
    );
  }
  return dp[N];
}

console.log(solution(N));


