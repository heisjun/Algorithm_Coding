function solution(picks, minerals) {
    let minFatigue = Infinity;

    const fatigueMap = {
        0: { diamond: 1, iron: 1, stone: 1 },    
        1: { diamond: 5, iron: 1, stone: 1 },    
        2: { diamond: 25, iron: 5, stone: 1 }   
    };

    function backtrack(idx, p, currentFatigue) {

        if (idx >= minerals.length || (p[0] === 0 && p[1] === 0 && p[2] === 0)) {
            minFatigue = Math.min(minFatigue, currentFatigue);
            return;
        }

        for (let i = 0; i < 3; i++) {
            if (p[i] > 0) {
                let nextFatigue = 0;
                let count = 0;

            
                for (let j = idx; j < Math.min(idx + 5, minerals.length); j++) {
                    nextFatigue += fatigueMap[i][minerals[j]];
                    count++;
                }

        
                const nextPicks = [...p];
                nextPicks[i]--;
                backtrack(idx + count, nextPicks, currentFatigue + nextFatigue);
            }
        }
    }

    backtrack(0, picks, 0);
    return minFatigue;
}