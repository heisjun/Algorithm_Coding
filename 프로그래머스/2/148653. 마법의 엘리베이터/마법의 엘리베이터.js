function solution(storey) {
    let answer = 0;

    while (storey > 0) {
        let currentDigit = storey % 10; // 현재 1의 자리 숫자
        let nextDigit = Math.floor(storey / 10) % 10; // 다음 10의 자리 숫자

        if (currentDigit > 5) {
            answer += (10 - currentDigit);
            storey = Math.floor(storey / 10) + 1;
        } 
        else if (currentDigit < 5) {
            answer += currentDigit;
            storey = Math.floor(storey / 10);
        } 
        else {
            if (nextDigit >= 5) {
                answer += 5;
                storey = Math.floor(storey / 10) + 1;
            } else {
                answer += 5;
                storey = Math.floor(storey / 10);
            }
        }
    }

    return answer;
}