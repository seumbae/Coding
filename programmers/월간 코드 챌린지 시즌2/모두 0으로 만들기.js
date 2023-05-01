function solution(a, edges) {
    if(a.reduce((acc, cur) => acc+cur, 0) !== 0) return -1
    
    const graph = [...new Array(a.length)].map(() => [])
    
    edges.forEach(([u, v]) => {
        graph[u].push(v)
        graph[v].push(u)
    })
    
    const stack = [[0, null]]
    const visited = new Array(a.length).fill(false)
    let ans = 0n
    
    while(stack.length){
        const [node, parent] = stack.pop()
        
        if(visited[node]){
            ans += BigInt(Math.abs(a[node]))
            a[parent] += a[node]
            a[node] = 0
            continue
        }
        
        visited[node] = true
        if(parent !== null) stack.push([node, parent])
        
        graph[node].forEach((next) => {
            if(!visited[next]) stack.push([next, node])
        })  
    }
    return ans
}