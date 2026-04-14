function solution(begin, target, words) {
    if (!words.includes(target)) return 0;

    function getDiff(wordA, wordB){
        let cnt = 0;
        for(let i = 0; i < wordA.length; i++){
            if(wordA[i] !== wordB[i]){
                cnt++;
            }
            if(cnt > 1){
                return false
            }
        }
        return true;
    }
    
    const visited = Array(words.length).fill(false)
    
    const que = [[begin, 0]];
    
    while(que.length > 0){
        const [currentWord, cnt] = que.shift();
        
        if(currentWord === target){
            return cnt
        }
        
        for(let i = 0; i < words.length; i++){
            if(!visited[i] && getDiff(currentWord, words[i])){
                visited[i] = true;
                que.push([words[i], cnt+1])
            }
        }

        
    }
}

