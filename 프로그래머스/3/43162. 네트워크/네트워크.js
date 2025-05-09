function solution(n, computers) {
    
    const graph = Array.from(new Array(n+1),()=>[]);
    
    computers.forEach((net,idx)=>{
        for(let i =0; i < net.length; i++){
            if(net[i] === 1){
                graph[idx+1].push(i+1)
            }
        }
    })
    let visited =new Array(n + 1).fill(0);
    
    function dfs(node){
        if(visited[node]) return;
        visited[node] = true;
        for(let i=0; i < graph[node].length; i++){
            let nextNode = graph[node][i];
            if(!visited[nextNode]){
                dfs(nextNode)
            }
        }
        
    }
    
    let answer = 0;
    for(let i=1; i <=n ; i++){
        if(!visited[i]){
            dfs(i)
            answer++;
        }
       
    }
    
    return answer
}