function solution(n, times) {
    
    let left = 0;
    let right = Math.max(...times)*n;
    let result = 0;
    
    while(left <= right){
        let mid = Math.floor((left+right)/2);
        let total = 0;
        
        times.forEach((time)=>{
            total += Math.floor(mid/time);
        })
        
        if(total >= n){
            result = mid;
            right = mid-1;
        }else{
            
            left = mid+1;
            
        }
    }
    
    return result
}


