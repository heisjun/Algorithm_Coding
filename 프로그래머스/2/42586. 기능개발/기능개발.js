function solution(progresses, speeds) {
    
    const leaveDays = progresses.map((prog, i) => Math.ceil((100 - prog) / speeds[i]));
    
    const result = [];
    let maxDay = leaveDays[0]; 
    let cnt = 1; 
    
    for (let i = 1; i < leaveDays.length; i++) {
        if (leaveDays[i] <= maxDay) {
            cnt++;
        } else {
            result.push(cnt);
            maxDay = leaveDays[i];
            cnt = 1;
        }
    }
    result.push(cnt); 
    
    return result;
}