function solution(expression) {
    const priorities = [
        ['+', '-', '*'], ['+', '*', '-'],
        ['-', '+', '*'], ['-', '*', '+'],
        ['*', '+', '-'], ['*', '-', '+']
    ];
    
    const initialNums = expression.split(/[^0-9]/).map(Number);
    const initialOps = expression.split(/[0-9]/).filter(v => v !== "");

    let maxResult = 0;


    for (const priority of priorities) {
        // 원본 배열이 망가지지 않게 복사본을 사용
        let nums = [...initialNums];
        let ops = [...initialOps];

        //현재 우선순위 순서대로 연산 수행
        for (const op of priority) {
            for (let i = 0; i < ops.length; i++) {
                if (ops[i] === op) {
                   
                    const result = calculate(nums[i], nums[i + 1], op);
                    
                    nums.splice(i, 2, result);
                    ops.splice(i, 1);
                    
                    i--;
                }
            }
        }
        
        maxResult = Math.max(maxResult, Math.abs(nums[0]));
    }

    return maxResult;
}

function calculate(a, b, op) {
    if (op === '+') return a + b;
    if (op === '-') return a - b;
    if (op === '*') return a * b;
}