function solution(priorities, location) {
    
    const list = priorities.map((pri,idx)=>({
        prio : pri,
        index : idx,
    }))
    
    let sequence = 0;
    
    while(list.length > 0){
        const current = list.shift()    // { prio: 2, index: 0 }
        
        const hasHigherPrio = list.some(doc => doc.prio > current.prio)
        
        if(hasHigherPrio){
            list.push(current)
        }else{
            sequence++;
            
            if(current.index === location){
                return sequence
            }
        }
    }
}