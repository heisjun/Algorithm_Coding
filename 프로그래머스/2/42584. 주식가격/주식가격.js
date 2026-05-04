function solution(prices) {
    const arr = [];
    const tmp = prices.reverse()
    while(tmp.length) {
        const price = tmp.pop()
        let cnt = 0;
        for (let i = tmp.length - 1 ; i >= 0 ; i--) {
            cnt += 1
            if (price > tmp[i]) {
                break
            }
        }
        arr.push(cnt)
    }
    return arr ;
}