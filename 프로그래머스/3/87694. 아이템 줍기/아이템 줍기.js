function solution(rectangle, characterX, characterY, itemX, itemY) {
   
    // 좌표를 2배로 늘렸으므로 맵 크기는 101~102 정도가 적당해
    const map = Array.from({ length: 102 }, () => Array(102).fill(0));

    // 1. 좌표 2배 확장 및 그리기
    const doubledRects = rectangle.map(r => r.map(v => v * 2));

    doubledRects.forEach(([x1, y1, x2, y2]) => {
        for (let i = y1; i <= y2; i++) {
            for (let j = x1; j <= x2; j++) {
                // 이미 다른 사각형의 '내부(2)'라면 건드리지 않음
                if (i > y1 && i < y2 && j > x1 && j < x2) {
                    map[i][j] = 2; // 내부는 2로 표시
                } else {
                    // 테두리일 때, 이미 내부(2)로 판정된 곳이 아닐 때만 1로 표시
                    if (map[i][j] !== 2) map[i][j] = 1;
                }
            }
        }
    });
    
    const startX = characterX*2;
    const startY = characterY*2;
    const targetX = itemX*2;
    const targetY = itemY*2;
    
    const dy = [-1, 1, 0, 0];
    const dx = [0, 0, -1, 1];
    

    const que = [[startY,startX,0]]
    const visited = Array.from({ length: 102 }, () => Array(102).fill(false));
    visited[startY][startX] = true;
    
    while(que.length > 0){
        const [currentY, currentX, dist] = que.shift();
        
        if(currentY === targetY && currentX === targetX){
            return dist/2;
        }
        
        for(let i =0; i <4; i++){
            const nextY = currentY + dy[i];
            const nextX = currentX + dx[i];
            
            if (nextY >= 0 && nextY < 102 && nextX >= 0 && nextX < 102) {
                if (map[nextY][nextX] === 1 && !visited[nextY][nextX]) {
                    visited[nextY][nextX] = true;
                    que.push([nextY, nextX, dist + 1]);
                }
            }
        }
    }
    
    
    
}