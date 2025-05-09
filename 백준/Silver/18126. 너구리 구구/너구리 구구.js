const input = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n");

let N = +input.shift();
let graph = Array.from({ length: N + 1 }, () => []);

// add edges
for (let i = 0; i < N - 1; i++) {
  let [A, B, C] = input[i].split(" ").map(Number);

  graph[A].push({ to: B, weight: C });
  graph[B].push({ to: A, weight: C });
}


let visited = new Array(N + 1).fill(-1);
let que = [1];
visited[1] = 0; //누적 거리합

while (que.length !== 0) {
  let node = que.shift();

  for (let i = 0; i < graph[node].length; i++) {
    let next = graph[node][i].to;

    if (visited[next] === -1) {
      visited[next] = graph[node][i].weight + visited[node];
      que.push(next);
    }
  }
}

console.log(Math.max(...visited));
