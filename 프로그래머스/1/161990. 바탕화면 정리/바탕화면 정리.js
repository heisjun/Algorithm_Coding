function solution(wallpaper) {
    const arr = wallpaper.map((row)=>row.split(""))
   
    const row = [];
    const col = [];
        for(let i =0; i < arr.length; i++){
            for(let j=0; j<arr[0].length;j++){
                if(arr[i][j] ==='#'){
                    row.push(i);
                    col.push(j)
                }
            }
        }
    
    const [lux,luy] = [Math.min(...row), Math.min(...col)];
    const [rdx,rdy] = [Math.max(...row)+1, Math.max(...col)+1];
        
    return ([lux,luy,rdx,rdy])
}