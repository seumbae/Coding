function solution(n, wires) {
    const graph = [...Array(n+1)].map(() => [])
    
    let ans = Number.MAX_SAFE_INTEGER;
    
    wires.forEach(([from, to]) => {
        graph[from].push(to)
        graph[to].push(from)
    })
    
    for(let wire of wires){
        const [start, end] = wire
        const visited = [...Array(n+1)].fill(false);
        const que = [...graph[start]]

        visited[start] = true;
        visited[end] = true;
        
        let connection = 1
        while(que.length){
            const next = que.shift();
            if(!visited[next]){
                visited[next] = true;
                connection++;
                que.push(...graph[next])
            }
        }
        ans = Math.min(Math.abs(n- 2*connection), ans);
    }
    
    return ans;
}