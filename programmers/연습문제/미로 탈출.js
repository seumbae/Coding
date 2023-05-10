function solution(maps) {
    let ans = -1;
    
    const row = maps.length, col = maps[0].length;
    let visited;
    let start, lever, exit;
    let dx = [0, 0, -1, 1];
    let dy = [-1, 1, 0, 0];
    
    for(let i=0; i<row; i++){
        for(let j=0; j<col; j++){
            if(maps[i][j] === 'S') start = [i, j];
            else if(maps[i][j] === 'L') lever = [i, j];
            else if(maps[i][j] === 'E') exit = [i, j];
        }
    }
    const initVisited = () => {
        visited = [...new Array(row)].map(() => Array(col).fill(false));
    }
    
    const bfs = (x, y, cnt, flag) => {
        visited[x][y] = true;
        
        const que = [[x, y, cnt]]
        
        while(que.length){
            const [x, y, cnt] = que.shift();
            for(let i=0; i<4; i++){
                const [nx, ny] = [x + dx[i], y + dy[i]];
                
                if(0 <= nx && nx < row && 0 <= ny && ny < col && !visited[nx][ny] && maps[nx][ny] !== 'X'){
                    if(maps[nx][ny] === flag) return cnt+1;
                    que.push([nx, ny, cnt+1]);
                    visited[nx][ny] = true;
                }
            }
        }
    }
    
    initVisited();
    let leverCnt = bfs(start[0], start[1], 0, 'L');
    
    if(leverCnt){
        initVisited();
        let exitCnt = bfs(lever[0], lever[1], 0, 'E');   
        return leverCnt + exitCnt
    }
    else return -1;

}