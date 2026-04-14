function solution(board) {
    
    let start,goal
    for(let i = 0; i < board.length; i++){
        for(let j =0; j < board[0].length; j++){
            if(board[i][j] ==='R'){
                start = [i,j]
            }
            if(board[i][j] === 'G'){
                goal = [i,j]
            }
        }
    }
    
    
    const visited = Array.from({length: board.length}, () => Array(board[0].length).fill(false));
    
    const que =[[...start, 0]]  //시작좌표와 이동횟수
    visited[start[0]][start[1]] = true;
    
    const dirs = [[0,1],[0,-1],[1,0],[-1,0]];   //이동방향 하,상,우,좌
    
    while(que.length > 0){
        const [row, col , cnt] = que.shift();
        
        if(row === goal[0] && col === goal[1]){
            return cnt
        }
        
        for(const [dr,dc] of dirs){
            let nextRow = row;
            let nextCol = col;
            
            while(nextRow+dr >=0 && nextCol+dc>=0 && nextRow+dr <board.length && nextCol+dc < board[0].length &&board[nextRow + dr][nextCol + dc]!=='D' ){
                nextRow += dr;
                nextCol += dc;
            }
            
            if(!visited[nextRow][nextCol]){
                visited[nextRow][nextCol] = true;
                que.push([nextRow, nextCol, cnt+1])
            }
        }
    }
    
    return -1
 
}