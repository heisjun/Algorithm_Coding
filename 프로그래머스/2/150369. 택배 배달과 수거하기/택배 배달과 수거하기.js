function solution(cap, n, deliveries, pickups) {
    let answer = 0;
    
    // 현재 트럭이 뒤에서부터 오면서 처리할 수 있는 배달/수거 여유분
    let dAmount = 0; 
    let pAmount = 0;

    // 가장 먼 집부터 거꾸로 확인
    for (let i = n - 1; i >= 0; i--) {
        let cnt = 0; // 이번 집을 해결하기 위해 트럭이 방문해야 하는 횟수

        // 이 집에서 필요한 배달/수거량을 현재 여유분에서 뺌
        dAmount -= deliveries[i];
        pAmount -= pickups[i];

        // 배달이나 수거 중 하나라도 부족하면(음수가 되면) 트럭이 와야 함
        while (dAmount < 0 || pAmount < 0) {
            dAmount += cap;
            pAmount += cap;
            cnt++;
        }

        // 트럭이 방문한 횟수만큼 왕복 거리 더하기 (i + 1은 현재 집의 거리)
        if (cnt > 0) {
            answer += (i + 1) * 2 * cnt;
        }
    }

    return answer;
}