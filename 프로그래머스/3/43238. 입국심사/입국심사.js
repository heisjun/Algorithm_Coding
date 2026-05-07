function solution(n, times) {
   let maxTime = Math.max(...times);
    
    let left = 1;
    let right = maxTime * n;
    let answer;
    while(left <=right){
        const mid = Math.floor((left+right)/2);
        
        let people = 0;
        times.forEach((time)=>{
            people += Math.floor(mid/time)
        })
        
        if(people >= n){
            answer = mid;
            right = mid -1;
        }else{
            left = mid + 1;
        }
    }
    
    return answer
}