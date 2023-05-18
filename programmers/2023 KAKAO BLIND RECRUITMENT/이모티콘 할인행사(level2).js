function solution(users, emoticons) {
    let ans = [0, 0]
    const ratios = [40, 30, 20, 10]
    
    let price = Array(users.length).fill(0); //사람별 이모티콘 구매비용
    
    const dfs = (idx) => {
        if(idx === emoticons.length){
            let total = 0
            let service = 0
            for(let i=0; i<users.length; i++){
                if(users[i][1] <= price[i]) {
                    service++;
                }else{
                    total += price[i]
                }
            }
            if(ans[0] === service) ans[1] = Math.max(ans[1], total);
            else if(ans[0] < service) ans = [service, total];
            
            return;
        }
        else{
            ratios.forEach((ratio) => {
                for(let i=0; i<users.length; i++){
                    if(users[i][0] <= ratio) price[i] += Math.floor(emoticons[idx] * (100-ratio)/100)
                }
                
                dfs(idx+1);
                
                for(let i=0; i<users.length; i++){
                    if(users[i][0] <= ratio) price[i] -= Math.floor(emoticons[idx] * (100-ratio)/100)
                }
            })
        }
    }
    dfs(0)
    return ans
}