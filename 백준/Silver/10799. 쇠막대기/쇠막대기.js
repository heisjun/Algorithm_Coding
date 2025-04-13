const input = require("fs").readFileSync("/dev/stdin").toString().trim();

let stack = [];
let result = 0;

for (let i = 0; i < input.length; i++) {
  if (input[i] === "(") {
    stack.push("(");
  } else {
    stack.pop();
    if (input[i - 1] === "(") {
      // 레이저인 경우
      result += stack.length;
    } else {
      // 막대기의 끝인 경우
      result += 1;
    }
  }
}

console.log(result);
