function solution(storey) {
    let ans = 0;
    
    while(storey){
        let remain = storey % 10;
        storey = Math.floor(storey/10)
        
        if(remain > 5 || (remain===5 && 5 <= storey%10)){
            storey += 1
            remain = 10-remain
        }
        ans += remain
    }
    return ans
}