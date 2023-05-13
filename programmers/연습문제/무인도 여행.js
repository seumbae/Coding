function solution(maps) {
    maps = maps.map(el => el.split(''));
    
    const row = maps.length;
    const col = maps[0].length;
    const visited = [...Array(row)].map(() => Array(col).fill(false));
    
    const dx = [0, 0, -1, 1]
    const dy = [-1, 1, 0, 0]
    
    const ans = []
    
    const bfs = (x, y) => {
        let sum = 0;
        visited[x][y] = true
        
        const que = [[x,y]]
        
        while(que.length){
            const [x, y] = que.shift();
            sum += Number(maps[x][y])
            for(let i=0; i<4; i++){
                const [nx, ny] = [x+dx[i], y+dy[i]]
                
                if(0<=nx && nx <row && 0<=ny && ny <col && !visited[nx][ny] && maps[nx][ny]!=='X'){
                    visited[nx][ny] = true;
                    que.push([nx,ny])
                }
            }
        }
        ans.push(sum);
    }
    
    for(let i=0; i<row; i++){
        for(let j=0; j<col; j++){
            if(maps[i][j] !== 'X' && !visited[i][j])
                bfs(i, j);
        }
    }
    return ans.length ? ans.sort((a, b) => a-b) : [-1]
}