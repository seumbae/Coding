function solution(n, info) {
    let ans = [-1]
    let sum = Number.MIN_SAFE_INTEGER
    const calc = (info, ryan) =>{
        return info.reduce((acc, cur, idx) =>{
            if(cur === 0 && ryan[idx] === 0) return acc
            else if(ryan[idx] <= cur) return acc-(10-idx);
            else return acc + (10-idx);
        }, 0)
    }
    
    const dfs = (rest, ryan, idx) => {
        if(rest === 0){
            let diff = calc(info, ryan);
            if(sum < diff && 0 < diff){
                ans = ryan
                sum = diff;
            }
        }
        else{
            for(let i=idx; i<11; i++){
                const targetIdx = 10 - i;
                const copied = [...ryan]
                if(info[targetIdx] < rest){
                    copied[targetIdx] = info[targetIdx] + 1
                    dfs(rest - copied[targetIdx], copied, i+1)
                }
                else{
                    copied[10] += rest
                    dfs(0, copied, 0)
                }
            }
        }
        //남은 화살
        if(0 < rest){
            ryan[10] += rest;    
            dfs(0, ryan.slice(), 0)
        }
    }
    
    dfs(n, Array(11).fill(0), 0)
    console.log(ans)
    return ans
}