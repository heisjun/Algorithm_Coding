function solution(distance, rocks, n) {
    rocks.sort((a, b) => a - b);

    let left = 1;
    let right = distance; 
    let result = 0; 

    while (left <= right) {
        let mid = Math.floor((left + right) / 2);
        
        let removedCount = 0; 
        let current = 0;

        for (let i = 0; i < rocks.length; i++) {
            if (rocks[i] - current < mid) {
                removedCount++;
            } else {
                current = rocks[i]; 
            }
        }
    
        if (distance - current < mid) {
            removedCount++; 
        }

        if (removedCount > n) {
            right = mid - 1;
        } else {
            result = mid;
            left = mid + 1;
        }
    }

    return result;
}