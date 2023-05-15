function solution(storey) {
    //     let ans = 0;
        
    //     while(storey){
    //         let remain = storey % 10;
    //         storey = Math.floor(storey/10)
            
    //         if(remain > 5 || (remain===5 && 5 <= storey%10)){
    //             storey += 1
    //             remain = 10-remain
    //         }
    //         ans += remain
    //     }
    //     return ans
        
        let ans = Number.MAX_SAFE_INTEGER;
        
        const dfs = (cmp, cnt) => {
            if(ans < cnt) return;
            if(cmp === 0){
                ans = cnt
            } 
            else{
                let remain = cmp % 10;
                
                dfs(Math.floor(cmp/10), cnt + remain);
                dfs(Math.floor(cmp/10)+1, cnt + 10 - remain)
            }
        }
        dfs(storey, 0)
        return ans
    }