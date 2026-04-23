function solution(board) {
    const N = board.length;
    const visited = Array.from({ length: N }, () =>
        Array.from({ length: N }, () => Array(4).fill(Infinity))
    );

    const dy = [-1, 1, 0, 0];
    const dx = [0, 0, -1, 1];

    const queue = [[0, 0, 0, -1]];
    for (let i = 0; i < 4; i++) visited[0][0][i] = 0;

    // shift() 대신 사용할 포인터 변수
    let head = 0;

    while (queue.length > head) {
        const [currY, currX, currCost, prevDir] = queue[head++]; 

        for (let i = 0; i < 4; i++) {
            const nextY = currY + dy[i];
            const nextX = currX + dx[i];

            if (nextY >= 0 && nextY < N && nextX >= 0 && nextX < N && board[nextY][nextX] === 0) {
                let nextCost = currCost + 100;
                if (prevDir !== -1 && prevDir !== i) nextCost += 500;

                if (nextCost < visited[nextY][nextX][i]) {
                    visited[nextY][nextX][i] = nextCost;
                    queue.push([nextY, nextX, nextCost, i]);
                }
            }
        }
    }

    return Math.min(...visited[N - 1][N - 1]);
}