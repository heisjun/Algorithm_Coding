const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

const N = +input.shift();
const origin = input.map((line) => line.split(" ").map(Number));
const maxHeight = Math.max(...origin.flat());

const ds = [
  [-1, 0],
  [1, 0],
  [0, -1],
  [0, 1],
];

function dfs(x, y, arr) {
  const stack = [[x, y]];
  while (stack.length) {
    const [cx, cy] = stack.pop();
    if (arr[cx][cy] === 0) continue;
    arr[cx][cy] = 0;
    for (let [dx, dy] of ds) {
      const nx = cx + dx;
      const ny = cy + dy;
      if (nx < 0 || ny < 0 || nx >= N || ny >= N) continue;
      if (arr[nx][ny] !== 0) {
        stack.push([nx, ny]);
      }
    }
  }
}

let maxSafeArea = 0;

for (let rain = 0; rain <= maxHeight; rain++) {
  const arr = origin.map((row) => [...row]);
  for (let i = 0; i < N; i++) {
    for (let j = 0; j < N; j++) {
      if (arr[i][j] <= rain) {
        arr[i][j] = 0; // 침수
      }
    }
  }

  let safe = 0;
  for (let i = 0; i < N; i++) {
    for (let j = 0; j < N; j++) {
      if (arr[i][j] !== 0) {
        dfs(i, j, arr);
        safe++;
      }
    }
  }

  if (safe > maxSafeArea) maxSafeArea = safe;
}

console.log(maxSafeArea);
