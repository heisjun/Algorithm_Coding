function solution(bridge_length, weight, truck_weights) {
    const bridgeArr = Array.from({length:bridge_length},()=> 0);
    
    let time = bridge_length;
    
    while(truck_weights.length > 0){
         const totalWeight = bridgeArr.reduce((acc,cur)=> acc+cur) - bridgeArr[0]
         const current = truck_weights[0];
         if(totalWeight + current <= weight){
             bridgeArr.shift();
             bridgeArr.push(current);
             truck_weights.shift();
         }else{
             bridgeArr.shift();
             bridgeArr.push(0);
         }
        time++;
    }
    return time
}