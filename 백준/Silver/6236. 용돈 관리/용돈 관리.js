const input = require("fs").readFileSync("/dev/stdin").toString().split("\n");

const [N, M] = input.shift().split(" ").map(Number);

const money = input.map(Number);

let min = Math.max(...money);
let max = money.reduce((a, b) => a + b);

while (min <= max) {
  let mid = Math.floor((min + max) / 2); //출금금액
  let cnt = 1;
  let currentMoney = mid;
  for (let i = 0; i < N; i++) {
    if (currentMoney - money[i] >= 0) {
      //현재 잔액이 사용금액보다 충분할 경우
      currentMoney -= money[i];
    } else {
      cnt++;
      currentMoney = mid - money[i];
    }
  }

  //만약 카운트 횟수가 M보다 작다면 mid값을 줄여여함.
  if (cnt <= M) {
    max = mid - 1;
  } else {
    //카운트 횟수가 M보다 크다면 인출금액 높여야함
    min = mid + 1;
  }
}

console.log(min);
