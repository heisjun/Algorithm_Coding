const [N, M] = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split(" ")
  .map(Number);

if (N === 1) {
  console.log(1);
} else if (N === 2) {
  console.log(Math.min(4, Math.floor((M + 1) / 2)));
} else if (N >= 3) {
  if (M <= 6) {
    console.log(Math.min(4, M));
  } else {
    console.log(M - 2);
  }
}

