function solution(begin, target, words) {
    
    function getDiffWords(start, words) {
      return words.filter(word => {
        let diffCount = 0;
        for (let i = 0; i < start.length; i++) {
          if (start[i] !== word[i]) {
            diffCount++;
            if (diffCount > 1) return false; // 더 이상 비교 불필요
          }
        }
        return diffCount === 1;
  });
}

    const cntArr = []
    function dfs(start, cnt, leftWords){
        if(start === target){
            cntArr.push(cnt)
        }
        const containWords = getDiffWords(start, leftWords);
        for(let i =0; i < containWords.length; i++){
            const nextBegin = containWords[i];
            const leftArr = leftWords.filter((ele)=> ele !== nextBegin)
            dfs(containWords[i],cnt+1,leftArr)
        }
    }
    dfs(begin, 0, words)
    if(cntArr.length > 0){
        return Math.min(...cntArr)
    }else{
        return 0;
    }
}

