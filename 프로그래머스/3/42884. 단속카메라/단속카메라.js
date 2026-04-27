function solution(routes) {
  
    let cnt = 0;
    let lastCamera = -30001;
    
    routes.sort((a,b)=>{
        return a[1]-b[1]
    })
    
    for(let i = 0; i < routes.length; i++){
        if(lastCamera < routes[i][0]){
            cnt++;
            lastCamera = routes[i][1]
        }
    }
    
    return (cnt)
    
}