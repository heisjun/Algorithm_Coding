const [N, M] = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split(" ")
  .map(Number);

const MOD = 1000000007;
const dp = Array(N + 1).fill(0);
dp[0] = 1;

for (let i = 1; i <= N; i++) {
  dp[i] = dp[i - 1];
  if (i >= M) {
    dp[i] = (dp[i] + dp[i - M]) % MOD;
  }
}

console.log(dp[N]);