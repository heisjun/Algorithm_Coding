## [**백준 9996번 - 한국이 그리울 땐 서버에 접속하지 (실버 III)**](https://www.acmicpc.net/problem/9996)

### 문제 요약

- 와일드카드 가 포함된 문자열 패턴이 주어짐
- 입력으로 들어오는 문자열들이 해당 패턴과 일치하는지 판별해야 함
- 는 빈 문자열을 포함하여 아무 문자열과도 매칭됨

---

## 접근 방식

### ✅ 1차 풀이 (직접 문자열 치환 후 인덱스 검사)

```jsx
const input = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\\n");

const N = +input.shift();
const pattern = input.shift().split("*");

for (let i = 0; i < N; i++) {
  let tCase = input[i].replace(pattern[0], "F");
  tCase = tCase.replaceAll(pattern[1], "E");

  if (tCase.indexOf("F") === 0 && tCase.lastIndexOf("E") === tCase.length - 1) {
    console.log("DA");
  } else {
    console.log("NE");
  }
}

```

### 🤔 문제점

- 치환 방식은 번거롭고 예외 상황에 약함
- 문자열 내부에 중복되는 prefix/suffix가 있을 경우 문제가 발생할 수음
- 직관적이지 않음

---

### ✅ 2차 풀이 (startsWith / endsWith 사용)

```jsx

const input = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n");

const n = Number(input[0]);
const target = input[1];

const [prefix, suffix] = target.split('*');

for (let i = 2; i < 2 + n; i++) {
  const str = input[i];

  if (str.length < prefix.length + suffix.length) {
    console.log('NE');
  } else if (str.startsWith(prefix) && str.endsWith(suffix)) {
    console.log('DA');
  } else {
    console.log('NE');
  }
}

```

### ✅ 장점

- 문자열 비교가 명확하고 간결함
- `startsWith`, `endsWith`는 가독성이 뛰어남
- 패턴 길이 체크(`str.length < prefix.length + suffix.length`)도 누락 없이 처리

---

### ✅ 3차 풀이 (정규표현식 활용)

```jsx

const input = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n");

const [n, pattern, ...files] = input;

// 1. 와일드카드 패턴을 정규 표현식으로 변환
// ^ → 문자열 시작 / $ → 문자열 끝
// \* → .* (모든 문자열)
// escape 처리 필요 없음 (문제상 * 하나만 있다고 가정)
const regexPattern = '^' + pattern.replace(/\*/g, '.*') + '$';
const regex = new RegExp(regexPattern);

// 2. 정규표현식 매칭
for (let file of files) {
  if (regex.test(file)) {
    console.log('DA');
  } else {
    console.log('NE');
  }
}

```

### 🔍 접근방식

- 와일드카드를 `.*`로 바꾸면 어떤 문자열도 매칭 가
- `^`, `$`를 추가하면 문자열 전체가 패턴과 일치하는 경우만 true
- 예: 패턴이 `ab*cd`라면 `^ab.*cd$` 로 변환

### 예시

```jsx

// 패턴: he*o
// 정규표현식: ^he.*o$
// 매칭 예시
// ✅ hello, heyo, he123o → 일치
// ❌ ohello, heyoz → 불일치
```

## 💡 배운 점

- 문자열 패턴 문제는 여러 방법으로 접근할 수 있으며, 각각 장단점이 존재함
- 특히 정규표현식을 사용하면 매우 유연하고 강력하게 문자열 매칭이 가능
- 자바스크립트의 문자열 내장 메서드(`startsWith`, `endsWith`)도 매우 강력하다는 것을 다시 느낌

---

## 🔧 보완할 점

- 정규표현식 사용 시 `.`나 `+`, `?` 등 다른 특수문자가 포함된 경우에는 escape 처리를 해줘야 함 (ex. `pattern.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')`)
- 패턴이 여러 개 존재하거나 복잡한 경우, 직접 문자열 연산보단 정규표현식으로 해결하는 게 코드가 간결해질 수 있음

---

## 🤔 느낀 점

처음에는 문자열을 직접 치환해서 구현했지만, 내장 메서드나 정규표현식을 활용하면 훨씬 깔끔하고 정확한 코드가 될 수 있다는 걸 알게 되었다.

이번 문제를 계기로 정규표현식에 대한 이해도가 조금 더 높아졌고, 향후 문자열 관련 문제에서 적극 활용할 수 있을 것 같다.
