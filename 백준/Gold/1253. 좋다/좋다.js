const input = require("fs").readFileSync("/dev/stdin").toString().split("\n");

const N = +input.shift();

const arrA = input
  .shift()
  .split(" ")
  .map(Number)
  .sort((a, b) => a - b);

function isGood(targetIdx) {
  let leftIdx = 0;
  let rightIdx = N - 1;
  while (leftIdx < rightIdx) {
    let sum = arrA[leftIdx] + arrA[rightIdx];
    if (targetIdx === leftIdx) {
      leftIdx += 1;
      continue;
    } else if (targetIdx === rightIdx) {
      rightIdx -= 1;
      continue;
    }

    if (sum === arrA[targetIdx]) {
      return true;
    } else if (sum < arrA[targetIdx]) {
      leftIdx += 1;
    } else {
      rightIdx -= 1;
    }
  }
  return false;
}

let ans = 0;
for (let i = 0; i < N; i++) {
  if (isGood(i)) ans++;
}

console.log(ans);
