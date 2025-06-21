const input = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n");

const N = +input.shift();
const board = input.map((ele) => ele.split(" "));

const dx = [1, 0];
const dy = [0, 1];

let maxResult = -Infinity;
let minResult = Infinity;

// 방문 체크 (현재 경로에서만)
const visited = Array.from({ length: N }, () => Array(N).fill(false));

function isOperator(c) {
  return c === "+" || c === "-" || c === "*";
}

function dfs(x, y, acc, operator) {
  if (x === N - 1 && y === N - 1) {
    maxResult = Math.max(maxResult, acc);
    minResult = Math.min(minResult, acc);
    return;
  }

  visited[x][y] = true;

  for (let dir = 0; dir < 2; dir++) {
    const nx = x + dx[dir];
    const ny = y + dy[dir];

    if (nx < 0 || ny < 0 || nx >= N || ny >= N) continue;
    if (visited[nx][ny]) continue;

    const next = board[nx][ny];

    if (isOperator(next)) {
      // 현재가 숫자여야 연산자 진행 가능
      dfs(nx, ny, acc, next);
    } else {
      const num = Number(next);
      if (operator !== null) {
        let newAcc;
        if (operator === "+") newAcc = acc + num;
        else if (operator === "-") newAcc = acc - num;
        else if (operator === "*") newAcc = acc * num;

        dfs(nx, ny, newAcc, null);
      }
    }
  }

  visited[x][y] = false; // 백트래킹 시 방문 해제
}

dfs(0, 0, Number(board[0][0]), null);

console.log(`${maxResult} ${minResult}`);
