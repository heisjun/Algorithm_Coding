### 💦 [백준 2468 - 안전 영역](https://www.acmicpc.net/problem/2468)

---

## 🧾 문제 요약

- 어떤 지역의 높이가 2차원 배열로 주어짐.
- 비가 일정량 내리면, 해당 높이 이하의 지역은 **침수**됨.
- 침수되지 않은 지역들 중에서 **연결된 안전한 영역의 개수**를 구함.
- 모든 강수량에 대해 안전 영역 개수를 구해서, **최댓값**을 반환.

---

## 💡 접근 방식

1. **강수량(rain)**을 기준으로 0부터 최고 높이까지 시뮬레이션.
2. `rain` 이하인 모든 지역을 침수 처리 (0으로 설정).
3. 침수되지 않은 지역을 기준으로 DFS 탐색 → 연결된 영역 하나로 카운팅.
4. 반복하면서 각 강수량에 대한 안전 영역의 개수를 구하고, 최댓값 갱신.

---

## ❌ 놓친 부분 & 실수

1. ✅ **강수량 범위 잘못 설정**
   - `for (let i = 1; i <= N; i++)` → ❌
   - → `0부터 지역의 최고 높이까지` 시뮬레이션해야 함.

2. ✅ **원본 배열 훼손**
   - DFS나 침수 처리를 하면서 `origin` 배열을 직접 수정하면 다음 반복에서 오류 발생.
   - → `origin.map((row) => [...row])` 로 깊은 복사해서 사용.

3. ✅ **DFS 로직의 끝 처리**
   - 방문한 곳을 즉시 `0`으로 마킹하지 않으면 중복 탐색 발생 가능.

---

## ✅ 최종 코드

```js
const input = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n");

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
      if (arr[i][j] <= rain) arr[i][j] = 0;
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

  maxSafeArea = Math.max(maxSafeArea, safe);
}

console.log(maxSafeArea);
```

---

## 🧾 배운점

- **2차원 배열 탐색 문제에서는 입력 훼손 주의!**: 원본 배열을 유지하고, 매번 복사본을 만들어야 반복 실험이 가능하다.
- **최대 범위를 입력에서 직접 계산하자**: 실질적인 조건 (`최대 높이`)에 맞춰 루프 범위를 정해야 한다.
- DFS 탐색이 끝났다는 건 **하나의 영역이 끝났다는 의미** → 카운팅 타이밍 중요!
