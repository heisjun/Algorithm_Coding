## 📌 문제: 백준 17271-**리그 오브 레전설 (Small)**

## 📝  문제 요약

- **1턴에 1초 혹은 M초 짜리 스킬**만 사용할 수 있음
- **총 N초 동안 싸웠을 때**, 가능한 **스킬 사용 순서의 경우의 수**를 구하라
- 단, **중간에 시간이 남거나 넘겨선 안됨**
- 정답은 **1,000,000,007로 나눈 나머지 출력**

---

## ❌ 처음 시도방법

```jsx
const [N, M] = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split(" ")
  .map(Number);

let cnt = 0;
let K = 0;

function factorial(n) {
  if (n === 0 || n === 1) {
    return 1;
  }
  let result = 1;
  for (let i = 2; i <= n; i++) {
    result *= i;
  }
  return result;
}

while (N - K * M >= 0) {
  let aCnt = N - K * M;
  let bCnt = K;
  let combiCnt = factorial(aCnt + bCnt) / (factorial(aCnt) * factorial(bCnt));
  cnt += combiCnt % 1000000007;
  K++;
}

console.log(cnt);

```

- 조합(`nCr`) 을 이용하여 B를 몇 번 쓰는지 분기마다 경우의수를 구해 더하는 방식을 시도

### ❌ 문제 1: 큰 수의 팩토리얼은 `JavaScript Number`에서 **정확도 손실**이 발생

- 예를 들어 `factorial(100)` 정도만 해도 수치적으로 `10^157` 이상이 되고,
- JS는 내부적으로 `double(부동소수)`라 정수 계산 정확도가 깨짐 → `combiCnt` 오차 발생

---

### ✅  핵심 아이디어

- `dp[i]`: **정확히 i초를 채우는 스킬 사용 순서의 경우의 수**
- 가능한 경우의 수는 두 가지:
    - **1초짜리 스킬**을 마지막에 쓴 경우 → `dp[i - 1]`
    - **M초짜리 스킬**을 마지막에 쓴 경우 → `dp[i - M]`

즉, 점화식은 다음과 같다:

```jsx

dp[i] = dp[i - 1] + dp[i - M];
```

단, `i < M`일 땐 `i - M`은 음수이므로 조건 분기 필요.

---

## 💻 최종 코드

```jsx
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
```

---

## 🤔 배운 점

- 처음엔 조합으로 접근했지만 오버플로우와 부정확한 값으로 오답이 났다.
- DP 배열은 문제에서 원하는 **결과값의 정의를 스스로 세우는 것**이 중요하다.
- 점화식이 의미하는 바를 **문제 상황에 맞게 직관적으로 해석**해야 진짜 이해가 된다.
- 나머지 연산 (`% MOD`) 은 꼭 **덧셈/곱셈 직후마다 적용해야 오버플로우 방지 가능**
