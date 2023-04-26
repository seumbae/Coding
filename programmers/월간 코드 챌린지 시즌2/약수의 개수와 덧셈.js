// Case 1:
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

// Case 2: 재곱수의 약수의 개수는 홀수다.
// ex. 9 => 1, 3, 9 : 1과 수, 그리고 제곱근
function solution(left, right) {
    let ans = 0
    for(let i=left; i<=right; i++){
        if(Number.isInteger(Math.sqrt(i)))
            ans -= i
        else ans += i
    }
    return ans
}