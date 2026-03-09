function solution(m, n, puddles) {
    const map = Array.from((new Array(n+1)),()=> new Array(m+1).fill(0));
    map[1][1] =1
    
    for(let i =0; i < puddles.length; i++){
        map[puddles[i][1]][puddles[i][0]] = 'x'
    }
    
      for(let i = 1; i < map.length; i++){
        for(let j =1; j<map[i].length; j++){
            if(i ===1 && j ===1) continue;
            if(map[i][j] === 'x') continue;          
            let n = (map[i][j-1] === 'x'? 0 :map[i][j-1])  + (map[i-1][j] ==='x'? 0 : map[i-1][j])
            n = n % 1000000007;
             map[i][j] = n
        }
    }
    return map[n][m] % 1000000007
   
}