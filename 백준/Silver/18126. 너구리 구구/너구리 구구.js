const input = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n");

const N = +input.shift();

const info = input.map((ele) => ele.split(" ").map(Number));

const graph = {};

for (const [start, end, weight] of info) {
  if (!graph[start]) {
    graph[start] = [];
  }
  if (!graph[end]) {
    graph[end] = [];
  }
  graph[start].push([end, weight]);
  graph[end].push([start, weight]);
}

let maxLength = 0;

function dfs(node, visited, dist) {
  maxLength = Math.max(maxLength, dist);
  visited.add(node);

  for (const [next, weight] of graph[node] || []) {
    if (!visited.has(String(next))) {
      dfs(String(next), new Set(visited), dist + weight);
    }
  }
}

dfs("1", new Set(), 0);

console.log(maxLength);
