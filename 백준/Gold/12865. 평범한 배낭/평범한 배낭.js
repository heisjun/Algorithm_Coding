const input = require("fs").readFileSync("/dev/stdin").toString().trim().split("\n");

const [N, K] = input.shift().split(" ").map(Number);

const bag = input.map((ele) => ele.split(" ").map(Number));

let dp = Array.from({length : N + 1}, () => Array.from({length : K + 1}, _ => 0));

for (let i = 1; i < bag.length + 1; i++) {
  const [weight, value] = bag[i - 1];
  for (let j = 1; j < K + 1; j++) {
    if (j >= weight) {
      dp[i][j] = Math.max(dp[i-1][j - weight] + value, dp[i - 1][j]);
    } else {
      dp[i][j] = dp[i - 1][j];
    }
  }
}

console.log(dp[N][K]);
