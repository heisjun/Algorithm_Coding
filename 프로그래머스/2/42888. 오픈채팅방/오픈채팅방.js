function solution(record) {
    //나가서 닉네임 변경 후 접속 -> 기존 나간 닉네임 모두 변경
    //채팅방 내부에서 변경 -> 기존 닉네임도 모두 변경
    
    //1.무지 2.프로도in 1.무지out 1.무지change프로도 1.프로도in
    
    const realNickName = new Map();
    
    record.forEach((ele)=>{
        const [cmd,userId,nickName] = ele.split(" ");
        
        if(cmd === 'Enter' || cmd ==='Change'){
            realNickName.set(userId, nickName);
        }
    })
    
    const result = []
    
    record.forEach((ele)=>{
        const [cmd,userId,nickName] = ele.split(" ");
        
        const resultName = realNickName.get(userId)
        if(cmd === 'Enter'){
            result.push(`${resultName}님이 들어왔습니다.`)
        }
        if(cmd === 'Leave'){
            result.push(`${resultName}님이 나갔습니다.`)
        }
    })
    
    return result
    
}