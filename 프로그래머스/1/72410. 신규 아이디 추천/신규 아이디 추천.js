function solution(new_id) {
    
    //step1 (toLowerCase이용)
    new_id = new_id.toLowerCase()   
    //step2 (정규표현식을 이용하여 예외문자열 처리)
    new_id = new_id.replace(/[^a-z0-9._-]/g,'');
    //step3 (연속된 마침표를 하나의 마침표로 변환)
    new_id = new_id.replace(/\.{2,}/g,".");
    //step4 (시작과 끝에 마침표가 있다면 제거)
    if(new_id.startsWith('.')){
        new_id = new_id.substring(1);
    }
    if(new_id.endsWith('.')){
        new_id = new_id.substring(0,new_id.length-1)
    }
    //step5 (빈 문자열이라면 new_id = a)
    if(new_id.length === 0){
        new_id = 'a';
    }
    
    //step6
    if(new_id.length >=16){
        new_id = new_id.substring(0,15)
         if(new_id.endsWith('.')){
            new_id = new_id.substring(0,new_id.length-1)
        }
        return new_id
    }
    
    if(new_id.length <=2){
         let lastWord = new_id.charAt(new_id.length-1);
        while(new_id.length !==3){
            new_id = new_id + lastWord
        }
        return new_id
    }
    
    return new_id
}