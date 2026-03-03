function solution(k, dungeons) {
    let maxDungeons = 0; 
    
    const visited = Array(dungeons.length).fill(false);

    function dfs(currentHp, cnt) {

        if (cnt > maxDungeons) {
            maxDungeons = cnt;
        }

        for (let i = 0; i < dungeons.length; i++) {
            
            const minRequireHp = dungeons[i][0]; // 최소 필요 피로도
            const consumeHp = dungeons[i][1];    // 소모 피로도

          
            if (!visited[i] && currentHp >= minRequireHp) {      
                visited[i] = true; 
                
                dfs(currentHp - consumeHp, cnt + 1); 
                
                visited[i] = false; 
            }
        }
    }

    dfs(k, 0);

    return maxDungeons;
}

