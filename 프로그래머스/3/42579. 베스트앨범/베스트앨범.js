function solution(genres, plays) {
    //많이 재생된 장르 찾기
    const mostGenre = new Map();
    
    genres.map((genre,index)=>{
        if(mostGenre.has(genre)){
            mostGenre.set(genre, mostGenre.get(genre) + plays[index])
        }else{
            mostGenre.set(genre, plays[index])
        }
    })
    
   const mostGenreArr = Array.from(mostGenre).sort((a,b)=>b[1]-a[1])
   
   //장르 내 많이 재생된
    const allInfo = genres.map((info,idx)=>({
        genre : info,
        playCnt : plays[idx],
        index : idx,
    }))

    let answer = [];
    
    mostGenreArr.forEach((key,idx)=>{
        let current = []
        for(let i =0; i < allInfo.length; i++){
            if(key[0] === allInfo[i].genre){
                current.push(allInfo[i])
            }
        }
        current.sort((a,b)=>b.playCnt - a.playCnt);
        current.forEach((ele,idx)=>{
            if(idx<2){
                answer.push(ele.index);
            }          
        })
    })

    return (answer)

}