function solution(a, b) {
    const len = a.length
    
    let ans = 0
    for(let i=0; i<len; i++){
        ans += (a[i] * b[i])
    }
    return ans
}