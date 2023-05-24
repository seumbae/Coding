function solution(n, wires) {
    const graph = [...Array(n+1)].map(() => [])
    
    let ans = Number.MAX_SAFE_INTEGER;
    
    wires.forEach(([from, to]) => {
        graph[from].push(to)
        graph[to].push(from)
    })
    
    const bfs = (idx, wire) =>{
        const visited = Array(n).fill(false);
        visited[idx-1] = true;
        let cnt = 0
        
        const que = [idx]
        
        while(que.length){
            const node = que.shift();
            
            wire[node].forEach((to) => {
                if(!visited[to-1]) {
                    que.push(to)
                    visited[to-1] = true
                    cnt++
                }
            })
        }
        return cnt+1
    }
    const dfs = (wire, depth, node) => {
        if(depth === 1){
            const connection = bfs(node, wire)
            const rest = Math.abs(n - connection)
            
            ans = Math.min(ans, Math.abs(rest - connection))
        }
        for(let i=1; i<=n; i++){
            for(let j=0; j<wire[i].length; j++){
                const toDelete = wire[i][0];
                wire[i].splice(0, 1);
                const idx = wire[toDelete].indexOf(i);
                wire[toDelete].splice(idx, 1)
                
                dfs(wire.slice(), depth+1, i)
                
                wire[i].push(toDelete);
                wire[toDelete].push(i);
            }
        }
    }
    dfs(graph.slice(), 0, 1)
    return ans;
}