#  [백준 1929] 소수 구하기

🔗 [문제 링크](https://www.acmicpc.net/problem/1929)

---

## 📌 문제 요약

M부터 N까지의 수 중에서 **소수**를 찾아 출력하는 문제입니다.  
소수란 **1과 자기 자신으로만 나누어지는 수**를 의미합니다.

---

## 💡 접근 방식

1. **기본 방식**  
   - M부터 N까지 반복하면서 각각의 수가 소수인지 판별합니다.
   - 소수 판별은 2부터 해당 수의 **제곱근까지** 나누어 떨어지는 수가 있는지를 검사합니다.
   - 시간 복잡도를 줄이기 위해 제곱근까지만 탐색합니다.

2. **예외 처리**
   - 1은 소수가 아니므로 출력에서 제외합니다.

---

## ✅ 기본 풀이 코드

```js
const [M, N] = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split(" ")
  .map(Number);

for (let i = M; i <= N; i++) {
  let isPrime = true;

  if (i === 1) continue;

  for (let j = 2; j <= Math.sqrt(i); j++) {
    if (i % j === 0) {
      isPrime = false;
      break;
    }
  }

  if (isPrime) {
    console.log(i);
  }
}
```

## 시간 복잡도 분석

- 최악의 경우: `O((N - M + 1) * √N)`
    
    예: M=1, N=1,000,000일 때 → 1백만 개의 수 각각에 대해 √N (약 1,000)번의 연산
    
- 제곱근까지만 탐색함으로써 시간 복잡도를 많이 줄였으며, 이 정도 범위는 JavaScript에서도 통과 가능



## 🔧 보완할 수 있는 부분 

- **에라토스테네스의 체** 알고리즘을 쓰면 더 빠르게 소수를 구할 수 있다.
    - 현재 코드는 **범위마다 하나씩 검사**하기 때문에 효율은 조금 떨어질 수 있다.
    - 에라토스테네스의 체는 `N` 이하의 모든 수에 대해 한 번만 체크하여 소수를 판별하므로 더 효율적이다.
- **소수 판별을 함수화**하면 코드 가독성이 올라간다.


## 개선 가능 코드 (에라토스테네스의 체)

```js
const [M, N] = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split(" ")
  .map(Number);

const isPrime = Array(N + 1).fill(true);
isPrime[0] = isPrime[1] = false;

for (let i = 2; i * i <= N; i++) {
  if (!isPrime[i]) continue;
  for (let j = i * i; j <= N; j += i) {
    isPrime[j] = false;
  }
}

for (let i = M; i <= N; i++) {
  if (isPrime[i]) console.log(i);
}
```

- 시간복잡도: `O(N log log N)`
    
    → 대규모 입력에서도 빠르게 처리 가능
    

---

## 마무리

- 기본적인 소수 판별 방법(제곱근까지 나눠보기)을 직접 구현하며 소수의 개념과 효율성 있는 탐색을 학습할 수 있었다.
- 이후 더 큰 범위에서 빠르게 소수를 구해야 한다면 **에라토스테네스의 체**를 활용하는 방법도 고려할 수 있다.
