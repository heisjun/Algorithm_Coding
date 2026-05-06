function solution(gems) {
    const totalCount = new Set(gems).size; 
    const gemMap = new Map(); 
    let answer = [1, gems.length];
    
    let left = 0;
    for (let right = 0; right < gems.length; right++) {
        gemMap.set(gems[right], (gemMap.get(gems[right]) || 0) + 1);
        
        while (gemMap.size === totalCount) {
            if (right - left < answer[1] - answer[0]) {
                answer = [left + 1, right + 1];
            }
            
            const leftGem = gems[left];
            gemMap.set(leftGem, gemMap.get(leftGem) - 1);
            
            if (gemMap.get(leftGem) === 0) {
                gemMap.delete(leftGem); 
            }
            left++;
        }
    }
    
    return answer;
}