function solution(a) {
    const count = a.reduce((acc, cur) =>{
        acc[cur] = acc[cur]+1 || 1
        return acc
    },{})
    const entries = Object.entries(count).sort((a, b) => b[1] - a[1])
    
    let ans = 0
    
    entries.forEach((el) => {
        const [key, cnt] = [+el[0], el[1]]
        if(cnt < ans) return ;
        
        let res = 0
        for(let i=0; i<a.length-1; i++){
            if(a[i] !== key && a[i+1] !== key) continue
            if(a[i] === a[i+1]) continue
            
            res += 2
            i++
        }
        ans = Math.max(ans, res)
    })
    return ans
}