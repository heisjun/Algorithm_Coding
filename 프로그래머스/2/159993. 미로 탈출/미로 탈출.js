function solution(maps) {
    const rows = maps.length;
    const cols = maps[0].length;

    let start, lever, exit;
    for (let r = 0; r < rows; r++) {
        for (let c = 0; c < cols; c++) {
            if (maps[r][c] === 'S') start = [r, c];
            if (maps[r][c] === 'L') lever = [r, c];
            if (maps[r][c] === 'E') exit = [r, c];
        }
    }

    function bfs(startPos, targetPos) {
        const [startR, startC] = startPos;
        const [targetR, targetC] = targetPos;
        
        const dr = [-1, 1, 0, 0];
        const dc = [0, 0, -1, 1];
        
        const visited = Array.from({ length: rows }, () => Array(cols).fill(false));
        const queue = [[startR, startC, 0]]; // [행, 열, 거리]
        visited[startR][startC] = true;

        while (queue.length > 0) {
            const [currR, currC, dist] = queue.shift();

            if (currR === targetR && currC === targetC) {
                return dist;
            }

            for (let i = 0; i < 4; i++) {
                const nr = currR + dr[i];
                const nc = currC + dc[i];

                if (nr >= 0 && nr < rows && nc >= 0 && nc < cols && 
                    maps[nr][nc] !== 'X' && !visited[nr][nc]) {
                    visited[nr][nc] = true;
                    queue.push([nr, nc, dist + 1]);
                }
            }
        }
        return -1; 
    }

    const toLever = bfs(start, lever);
    if (toLever === -1) return -1;

    const toExit = bfs(lever, exit);
    if (toExit === -1) return -1;

    return toLever + toExit;
}