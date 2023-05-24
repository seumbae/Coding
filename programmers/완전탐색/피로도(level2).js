function solution(k, dungeons) {
    let ans = Number.MIN_SAFE_INTEGER
    const visited = Array(dungeons.length).fill(false)

    const dfs = (fatigue, cnt) => {
        if(ans < cnt) ans = cnt
        
        for(let i=0; i<dungeons.length; i++){
            if(!visited[i] && dungeons[i][0] <= fatigue){
                visited[i] = true
                dfs(fatigue - dungeons[i][1], cnt+1)
                visited[i] = false
            }
        }
    }
    
    dfs(k, 0)
    return ans
}