function solution(n, wires) {
  // 1. 인접 리스트
  const graph = {};
  for (const [a, b] of wires) {
    if (!graph[a]) graph[a] = [];
    if (!graph[b]) graph[b] = [];
    graph[a].push(b);
    graph[b].push(a);
  }

  // 2. DFS
  function dfs(node, excluded, visited = {}) {
      visited[node] = true;
      let count = 1;

      for (const next of graph[node]) {
        if ((node === excluded[0] && next === excluded[1]) ||
            (node === excluded[1] && next === excluded[0])) continue;

        if (!visited[next]) {
          count += dfs(next, excluded, visited);
        }
      }

      return count;
}

  // 3. 완전탐색
  let answer = Infinity;
  for (const [a, b] of wires) {
    const count = dfs(a, [a, b]);
    const diff = Math.abs(count - (n - count));
    answer = Math.min(answer, diff);
  }

  return answer;
}