### 🌊 [백준 4963 - 섬의 개수](https://www.acmicpc.net/problem/4963)

---

## 🧾 문제 요약

- **지도에서 섬의 개수**를 세는 문제.
- **섬**: 1로 표시된 정사각형들의 집합.
- **연결 기준**: 상하좌우 + 대각선 방향까지 포함 (총 8방향).
- 입력은 여러 개의 테스트 케이스로 주어지며, `w = 0 && h = 0`일 때 종료됨.

---

## 💡 접근 방식

1. `while (input.length > 1)` 루프를 통해 여러 테스트케이스 처리.
2. 각 테스트 케이스마다 `w, h`를 추출하고 `h`줄만큼 맵 데이터 분리.
3. BFS 탐색을 통해 하나의 섬을 모두 0으로 바꾼 후, 카운트 증가.
4. **8방향 탐색**이므로 방향 벡터를 총 8개로 설정.
5. BFS에 `맵`, `w`, `h`를 인자로 넘겨 범위 체크를 정확하게 수행.

---

## ✅ 최종 코드

```js
const input = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n")
  .map((v) => v.split(" ").map(Number));

const ds = [
  [-1, 0], [1, 0], [0, -1], [0, 1], // 상하좌우
  [1, 1], [1, -1], [-1, 1], [-1, -1] // 대각선
];

function bfs(startX, startY, map, w, h) {
  const que = [[startX, startY]];
  while (que.length) {
    const [x, y] = que.shift();
    if (!map[x][y]) continue;
    map[x][y] = 0;
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
        bfs(i, j, board, w, h);
        cnt++;
      }
    }
  }

  console.log(cnt);
}
```
---
## 🔁 DFS로 푼 버전 (기존 BFS →DFS)

```jsx
const input = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n")
  .map((v) => v.split(" ").map(Number));

const ds = [
  [-1, 0], [1, 0], [0, -1], [0, 1],
  [-1, -1], [-1, 1], [1, -1], [1, 1],
];

function dfs(x, y, map, w, h) {
  map[x][y] = 0; // 방문 처리

  for (let i = 0; i < 8; i++) {
    const nx = x + ds[i][0];
    const ny = y + ds[i][1];

    if (nx < 0 || ny < 0 || nx >= h || ny >= w) continue;
    if (map[nx][ny] === 1) {
      dfs(nx, ny, map, w, h); // 재귀 호출로 깊이 탐색
    }
  }
}

while (input.length > 1) {
  const [w, h] = input.shift();
  const board = [];
  let cnt = 0;

  for (let i = 0; i < h; i++) {
    board.push(input.shift());
  }

  for (let i = 0; i < h; i++) {
    for (let j = 0; j < w; j++) {
      if (board[i][j] === 1) {
        dfs(i, j, board, w, h);
        cnt++;
      }
    }
  }

  console.log(cnt);
}
```

## 배운 점
| 항목 | DFS | BFS |
| --- | --- | --- |
| 구현 방식 | 스택 (재귀 or 명시적 스택 사용) | 큐 (shift, push 사용) |
| 탐색 순서 | 깊이 우선 | 너비 우선 |
| 시간복잡도 | O(w * h) | O(w * h) |
| 메모리 사용 | 재귀 스택이 깊어지면 위험 | 큐 공간 차지 (더 명확한 메모리 사용) |


- **입력 처리**: 테스트케이스가 여러 개이고 각 케이스마다 `w`와 `h`를 기준으로 분리되는 문제는 `shift()`를 적극 활용하면 깔끔하다.
- **DFS vs BFS**: 그래프 탐색 문제에서 방향이 많고 연결 여부만 판단할 땐 DFS가 효율적.
- **입력 종료 조건이 명시되지 않으면 무한 루프 가능** → 종료 조건 `w === 0 && h === 0` 반드시 체크.
- **대각선 포함 8방향 탐색**은 방향 벡터를 잘 구성해두면 코드가 간결해진다.
