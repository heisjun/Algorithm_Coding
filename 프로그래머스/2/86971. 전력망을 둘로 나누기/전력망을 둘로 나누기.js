function solution(n, wires) {
    let tree = Array.from(Array(n + 1), () => []);

    wires.forEach(([start, end]) => {
        tree[start].push(end);
        tree[end].push(start);
    });

    let minDiff = Number.MAX_SAFE_INTEGER;

    function countNodes(startNode, exceptionNode) {
        let count = 0;
        let visited = Array(n + 1).fill(false);

        visited[exceptionNode] = true;

        function dfs(currentNode) {
            visited[currentNode] = true;
            count++; 

            for (let nextNode of tree[currentNode]) {
                if (!visited[nextNode]) { 
                    dfs(nextNode); 
                }
            }
        }

        dfs(startNode); 
        return count; 
    }


    wires.forEach(([v1, v2]) => {
        let count1 = countNodes(v1, v2);

        let count2 = n - count1;

        let diff = Math.abs(count1 - count2);

        minDiff = Math.min(minDiff, diff);
    });

    return minDiff;
}