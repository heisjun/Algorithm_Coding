function solution(nums) {
    const max_nums = nums.length/2;
    
    const hash_nums = (new Set(nums)).size
    
    if(max_nums >= hash_nums){
        return hash_nums
    }else{
        return max_nums
    }
}