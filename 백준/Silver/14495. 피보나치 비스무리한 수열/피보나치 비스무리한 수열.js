let input = require("fs").readFileSync("/dev/stdin").toString().trim();

const n = +input;

function dp(N) {
  let arr = [BigInt(0), BigInt(1), BigInt(1), BigInt(1)];

  for (let i = 3; i <= N; i++) {
    arr[i] = arr[i - 1] + arr[i - 3];
  }

  return arr[N];
}

console.log(dp(n).toString());
