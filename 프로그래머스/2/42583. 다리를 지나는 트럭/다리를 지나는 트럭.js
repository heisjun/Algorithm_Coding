function solution(bridge_length, weight, truck_weights) {
    const bridgeArr = Array.from({length:bridge_length},()=> 0);
    
    let time = bridge_length;
    
    let currentBridgeWeight = 0;
    
    while(truck_weights.length > 0){
        const leaveTruck = bridgeArr.shift();
        currentBridgeWeight-=leaveTruck;
        
        const currentTruck = truck_weights[0]
        
        if(currentBridgeWeight + currentTruck <= weight ){
            currentBridgeWeight += currentTruck;
            bridgeArr.push(truck_weights.shift());
        }else{
            bridgeArr.push(0)
        }
        time++
    }
    return time
}