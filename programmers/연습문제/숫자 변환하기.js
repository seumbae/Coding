function solution(x, y, n) {
    const visited = Array(1000001).fill(false);
    const dist = Array(1000001).fill(0);
    
    visited[x] = true;
    
    const bfs = (v) => {
        if(v === y) return 0;
        let que = [v]
    
        while(que.length){
            const v = que.shift();
        
            for(let nv of [v+n, v*2, v*3]){
                if(nv === y) return dist[v] + 1;
                
                if(y < nv) continue;
                
                if(!visited[nv]){
                    que.push(nv);
                    visited[nv] = true;
                    dist[nv] = dist[v]+1;
                }
            }
        }   
    }
    
    let ans = bfs(x)
    return 0 <= ans ? ans : -1
}