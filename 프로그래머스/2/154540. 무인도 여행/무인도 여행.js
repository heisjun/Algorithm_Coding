function solution(maps) {
    const rows = maps.length;
    const cols = maps[0].length;
    const visited = Array.from({ length: rows }, () => Array(cols).fill(false));
    const result = [];

    // 상하좌우 이동을 위한 방향 배열
    const dr = [-1, 1, 0, 0];
    const dc = [0, 0, -1, 1];

    function bfs(r, c) {
        let queue = [[r, c]];
        visited[r][c] = true;
        let foodSum = 0;

        while (queue.length > 0) {
            const [currR, currC] = queue.shift();
            // 문자열 숫자를 정수로 변환하여 합산
            foodSum += parseInt(maps[currR][currC]);

            for (let i = 0; i < 4; i++) {
                const nr = currR + dr[i];
                const nc = currC + dc[i];

                // 격자 범위 내에 있고, 바다('X')가 아니며, 방문하지 않은 경우
                if (nr >= 0 && nr < rows && nc >= 0 && nc < cols && 
                    maps[nr][nc] !== 'X' && !visited[nr][nc]) {
                    visited[nr][nc] = true;
                    queue.push([nr, nc]);
                }
            }
        }
        return foodSum;
    }

    for (let r = 0; r < rows; r++) {
        for (let c = 0; c < cols; c++) {

            if (maps[r][c] !== 'X' && !visited[r][c]) {
                result.push(bfs(r, c));
            }
        }
    }

    return result.length === 0 ? [-1] : result.sort((a, b) => a - b);
}