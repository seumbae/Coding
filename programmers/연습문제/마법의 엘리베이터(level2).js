function solution(storey) {
    let ans = 0;
    
    while(storey){
        let remain = storey % 10;
        storey = Math.floor(storey/10)
        
        if(remain < 5) ans += remain
        else{
            storey += 1
            ans += (10-remain)
        }
    }
    return ans
}