## 📌 문제: **JadenCase 문자열 만들기**

## 📝 문제 요약

- 문자열 `s`가 주어졌을 때, **각 단어의 첫 문자는 대문자**, 그 외의 문자는 **소문자**로 변환해야 한다.
- 공백이 연속으로 포함될 수도 있으므로, 단순한 split-join 방식에서 **예외 처리를 잘 해야 한다.**

---

### 접근방식

1. 문자열 전체를 먼저 `.toLowerCase()` 처리하여 전체를 소문자로 만든다.
2. `" "`(공백)을 기준으로 `.split()`하여 단어 배열을 만든다.
3. 각 단어마다:
    - 첫 문자가 존재하면(`if (w[0])`), `toUpperCase()`로 변환
    - 나머지는 그대로 유지
4. 다시 `" "`으로 `.join()` 하여 결과 반환

---

### ✅ 제출코드

```jsx
function solution(s) {
   const words = s.toLowerCase().split(" ").map((word)=>{
       let w = word.split("")
       if(w[0]){
          w[0] = (w[0].toUpperCase())
       }
     
       return w.join("");
   });
    return words.join(" ")
}
```

---

### 💡다른 사람 풀이

```jsx
function solution(s) {
    return s.split(" ").map(v => v.charAt(0).toUpperCase() 
    + v.substring(1).toLowerCase()).join(" ");
}
```

- `charAt(0)`을 이용해서 첫 글자 추출
- `substring(1)`을 사용해 나머지 문자열 추출 후 소문자로 변환
- 두 문자열을 합치면 JadenCase 형식이 완성됨

## 🧠 배운 점

- **`substr()` vs `substring()`의 차이점**을 명확히 알게 됨

| 메서드 | 특징 | 예시 |
| --- | --- | --- |
| `substr(start, length)` | 시작 인덱스부터 **길이만큼** 잘라냄 | `"ABCDE".substr(1, 2)` → `"BC"` |
| `substring(start, end)` | 시작 인덱스부터 **끝 인덱스 전까지** 잘라냄 | `"ABCDE".substring(1, 3)` → `"BC"` |
- `charAt()`와 `substring()`을 함께 활용하면 문자열 처리에서 코드가 훨씬 간결해진다.
- 공백이 연속되거나, 앞/뒤에 공백이 포함된 문자열도 신경 써야 하기 때문에 `.split(" ")` 후에도 **빈 문자열 처리**에 주의해야 한다.
