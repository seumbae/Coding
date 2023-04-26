function solution(absolutes, signs) {
    let ans = 0
    signs.forEach((sign, idx) => {
        if(sign) ans += absolutes[idx]
        else ans -=absolutes[idx]
    })
    return ans
}