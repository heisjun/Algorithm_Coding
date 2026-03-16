function solution(n, times) {
    
    let min = 0;
    let max = Math.max(...times)*n;
    let result = 0;
    
    while(min <= max){
        let total = 0;
        let mid = Math.floor((min+max)/2);
        
        times.forEach((time)=>{
            total += Math.floor(mid/time)
        })
        
        if(total >= n){
            result = mid;
            max = mid - 1;
        }else{
            min = mid + 1;
        }
    }
    
    return (result)
}