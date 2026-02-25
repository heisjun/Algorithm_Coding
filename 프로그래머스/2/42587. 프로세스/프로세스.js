function solution(priorities, location) {
    let maxPri = Math.max(...priorities);
    
    const list = priorities.map((pri,idx)=> {
        return {
            prio : pri,
            index : idx
        }
    })
    
    const result = [];
    
    while(list.length > 0){
        if(maxPri === list[0].prio){
            result.push(list.shift());
            priorities.shift();
            maxPri = Math.max(...priorities);
        }else{
            let temp = list.shift();
            let temp2 = priorities.shift();
            list.push(temp);
            priorities.push(temp2);
        }
    }
    
    for(let i =0; i < result.length; i++){
        if(location === result[i].index){
            return i+1
        }
    }
}