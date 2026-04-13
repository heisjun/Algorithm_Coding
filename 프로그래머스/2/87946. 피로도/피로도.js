function solution(k, dungeons) {
    let maxDungeon = 0;
    
    const visitedArr = Array.from({length:dungeons.length},()=>0);

    
     function explore(currentHp, visitedCnt){
         
         maxDungeon = Math.max(maxDungeon, visitedCnt);
         
         for(let i = 0; i < dungeons.length; i++){
             if(visitedArr[i] === 0 && currentHp >= dungeons[i][0]){
                 visitedArr[i] = 1;
                 explore(currentHp - dungeons[i][1], visitedCnt+1)
                 visitedArr[i] = 0;
             }
         }
    }
    
    explore(k,0);
    
    return maxDungeon
   
}

