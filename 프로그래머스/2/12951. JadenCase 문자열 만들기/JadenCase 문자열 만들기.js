function solution(s) {
   const words = s.toLowerCase().split(" ").map((word)=>{
       let w = word.split("")
       if(w[0]){
          w[0] = (w[0].toUpperCase())
       }
     
       return w.join("");
   });
    return words.join(" ")
}