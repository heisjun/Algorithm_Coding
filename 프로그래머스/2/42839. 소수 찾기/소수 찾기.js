function solution(numbers) {
    const numArr = numbers.split(""); 
    const result = new Set();
    
    function getResult(currentStr, remainingArr) {

        if (currentStr !== "") {
            result.add(Number(currentStr));
        }

        for (let i = 0; i < remainingArr.length; i++) {

            const pick = remainingArr[i];
            

            const nextRemaining = [...remainingArr.slice(0,i), ...remainingArr.slice(i+1)]
            
            getResult(currentStr + pick, nextRemaining);
        }
    }

    getResult("", numArr);

    const allNumber = Array.from(result); 
    
    function isPrime(num) {
        if (num < 2) return false;
            for (let i = 2; i <= Math.sqrt(num); i++) {
                if (num % i === 0) return false;
            }
        return true;
    }
    
    
    let cnt = 0;
    for (let i = 0; i < allNumber.length; i++) {
        if (isPrime(allNumber[i])) {
            cnt++;
        }
    }
    return cnt;
}