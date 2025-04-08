### 📘 [백준 14495번 - 피보나치 비스무리한 수열](https://www.acmicpc.net/problem/14495)

---

## 🔍 문제 요약

- 수열의 점화식:  
  `f(n) = f(n-1) + f(n-3)`  
- 초깃값:  
  `f(1) = f(2) = f(3) = 1`  
- 이 수열의 n번째 값을 출력하는 문제

예시 수열:  
`1, 1, 1, 2, 3, 4, 6, 9, 13, 19, ...`

---

## 💡 접근 방식

1. 수열이 주어졌으므로, **점화식을 기반으로 DP(동적 계획법)**를 활용한다.
2. `f(n)`은 이전 결과를 재사용하면 되기 때문에, **배열을 이용한 Bottom-up 방식**으로 구현.
3. 입력값이 클 경우 정수 범위를 초과할 수 있으므로 **BigInt**를 사용해야 함.

---

## ❌ 실패한 시도

```js
let input = require("fs").readFileSync("/dev/stdin").toString().trim();

const n = +input;

function dp(N) {
  let arr = [0, 1, 1, 1];

  for (let i = 3; i <= N; i++) {
    arr[i] = arr[i - 1] + arr[i - 3];
  }

  return arr[N];
}

console.log(dp(n));
```

### 실패 이유

- 코드 로직 자체는 문제가 없었지만, **정수 범위를 초과**하는 케이스를 처리하지 못함.
- 예를 들어 `n = 116`인 경우, 결과값이 `7536815746437618530`처럼  Number 타입의 최대값 (2^53 - 1)**을 넘게 되어 정확한 계산이 불가능해짐.

## ✅ 개선한 코드

```jsx
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

```

---

## 배운 점

- **점화식 기반의 DP 문제는 초기 조건이 매우 중요**하며, 작은 실수로도 전체 풀이가 잘못될 수 있음.
- JavaScript에서는 **큰 수를 다룰 땐 반드시 BigInt 고려**하기

