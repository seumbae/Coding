function solution(left, right) {
    const getDivisorCnt = num => {
        let cnt = 0;
        for(let i=1; i<=num; i++){
            if(num % i === 0) cnt++
        }
        return cnt;
    }   
    
    let ans = 0
    for(let i=left; i<=right; i++){
        let tmp = getDivisorCnt(i)
        if(tmp % 2 === 0) ans += i
        else ans -= i
    }
    return ans
}