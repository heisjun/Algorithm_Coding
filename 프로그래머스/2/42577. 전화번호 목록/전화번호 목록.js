function solution(phone_book) {
    const sort_book = phone_book.sort()
    
    for(let i =0; i < sort_book.length-1; i++){
        if(sort_book[i+1].startsWith(sort_book[i])){
            return false
        }
    }
    return true
    
}