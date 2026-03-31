function solution(line) {
    const points = [];
    let minX = Infinity;
    let maxX = -Infinity;
    let minY = Infinity;
    let maxY = -Infinity;


    for (let i = 0; i < line.length; i++) {
        for (let j = i + 1; j < line.length; j++) {
            const [A, B, E] = line[i];
            const [C, D, F] = line[j];

            const denom = A * D - B * C; // 분모

            if (denom === 0) continue; 

            const xNum = B * F - E * D; // x 분자
            const yNum = E * C - A * F; // y 분자

            // 2. 교점이 정수인지 확인
            if (xNum % denom === 0 && yNum % denom === 0) {
                const x = xNum / denom;
                const y = yNum / denom;

                points.push([x, y]);

                // 교점들을 담으면서 동시에 캔버스 크기를 구하기 위해 최소/최대 좌표 갱신
                minX = Math.min(minX, x);
                maxX = Math.max(maxX, x);
                minY = Math.min(minY, y);
                maxY = Math.max(maxY, y);
            }
        }
    }

    const width = maxX - minX + 1;
    const height = maxY - minY + 1;
    

    const board = Array.from({ length: height }, () => Array(width).fill('.'));

    for (const [x, y] of points) {
        const row = maxY - y;  
        const col = x - minX;  
        board[row][col] = '*';
    }


    return board.map(row => row.join(''));
}