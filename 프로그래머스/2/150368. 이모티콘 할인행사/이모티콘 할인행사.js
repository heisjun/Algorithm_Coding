function solution(users, emoticons) {
    let maxPlus = 0;
    let maxRevenue = 0;
    const rates = [10, 20, 30, 40]; 
    const discounts = [];

    function backtrack(depth) {
        // 1. 모든 이모티콘의 할인율을 정했다면 결과 계산
        if (depth === emoticons.length) {
            let currentPlus = 0;
            let currentRevenue = 0;

            for (const [userRate, userBudget] of users) {
                let userSpent = 0;

                for (let i = 0; i < emoticons.length; i++) {
                    // 유저의 기준 할인율 이상인 것만 구매
                    if (discounts[i] >= userRate) {
                        userSpent += emoticons[i] * (1 - discounts[i] / 100);
                    }
                }

                // 예산 초과 시 플러스 가입, 아니면 매출 합산
                if (userSpent >= userBudget) {
                    currentPlus++;
                } else {
                    currentRevenue += userSpent;
                }
            }

            // 2. 최댓값 갱신 (우선순위: 플러스 가입자 > 매출액)
            if (currentPlus > maxPlus) {
                maxPlus = currentPlus;
                maxRevenue = currentRevenue;
            } else if (currentPlus === maxPlus) {
                maxRevenue = Math.max(maxRevenue, currentRevenue);
            }
            return;
        }

        // 3. 4가지 할인율을 하나씩 입혀보며 재귀 호출
        for (const rate of rates) {
            discounts.push(rate);
            backtrack(depth + 1);
            discounts.pop();
        }
    }

    backtrack(0);

    return [maxPlus, maxRevenue];
}