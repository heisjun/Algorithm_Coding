const input = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n");

const [N, M, A, B] = input.shift().split(" ").map(Number);
const dp = new Array(N + 1).fill(Infinity);
dp[0] = 0;

//닫힌구간 설정
for (let i = 0; i < M; i++) {
  const [L, R] = input[i].split(" ").map(Number);
  for (let j = L; j <= R; j++) {
    dp[j] = -1;
  }
}

for (let i = 1; i <= N; i++) {
  if (dp[i] === -1) continue;

  let ma = i - A;
  let mb = i - B;

  if (ma >= 0 && dp[ma] !== -1) {
    dp[i] = Math.min(dp[i], dp[ma] + 1);
  }
  if (mb >= 0 && dp[mb] !== -1) {
    dp[i] = Math.min(dp[i], dp[mb] + 1);
  }
}

console.log(dp[N] === Infinity ? -1 : dp[N]);
