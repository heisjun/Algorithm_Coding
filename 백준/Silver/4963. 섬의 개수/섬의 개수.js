const input = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n")
  .map((v) => v.split(" ").map(Number));

const ds = [
  [-1, 0],
  [1, 0],
  [0, -1],
  [0, 1],
  [1, 1],
  [1, -1],
  [-1, 1],
  [-1, -1],
];

function dfs(startX, startY, map, w, h) {
  const que = [[startX, startY]];
  while (que.length) {
    const [x, y] = que.shift();
    if (!map[x][y]) continue;
    else map[x][y] = 0;
    for (let i = 0; i < 8; i++) {
      const xPos = x + ds[i][0];
      const yPos = y + ds[i][1];

      if (xPos < 0 || yPos < 0 || xPos >= h || yPos >= w) continue;
      if (map[xPos][yPos]) {
        que.push([xPos, yPos]);
      }
    }
  }
}
while (input.length > 1) {
  const [w, h] = input.shift();
  let cnt = 0;
  const board = [];
  for (let i = 0; i < h; i++) {
    board.push(input.shift());
  }
  for (let i = 0; i < h; i++) {
    for (let j = 0; j < w; j++) {
      if (board[i][j]) {
        dfs(i, j, board, w, h);
        cnt++;
      }
    }
  }
  console.log(cnt);
}
