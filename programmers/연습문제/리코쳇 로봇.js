function solution(board) {
    let ans = 0;
    
    let row = board.length;
    let col = board[0].length;
    let goal, start;
    const dir = [[0, -1], [0, 1], [-1, 0], [1, 0]]; //상 하 좌 우
    const visited = [...new Array(board.length)].map(() => Array(board[0].length).fill(false));
    for(let i=0; i<row; i++){
        board[i] = board[i].split('');
    }
    for(let i=0; i<row; i++){
        for(let j=0; j<col; j++){
            if(board[i][j] === 'R') start = [i, j];   
            else if(board[i][j] === 'G') goal = [i, j];
            
            if(board[i][j] !== 'D') board[i][j] = 0
        }
    }
    
    const bfs = (x, y) => {
        visited[x][y] = true;
        const que = [[x, y]];
        
        while(que.length){
            let [dx, dy] = que.shift();
            for(let item of dir){
                let [nx, ny] = [dx+item[0], dy+item[1]];
                //while문을 통해 미끄러져야함
                while(0<= nx && nx < row && 0 <= ny && ny < col && board[nx][ny] !== 'D'){
                    nx += item[0];
                    ny += item[1];
                };
                if(nx < 0 || nx >= row || ny < 0 || ny >= col || board[nx][ny] === 'D'){
                    nx -= item[0];
                    ny -= item[1];
                }
                
                if(visited[nx][ny] === true) continue;
                visited[nx][ny] = true;
                board[nx][ny] = board[dx][dy] + 1;
                if(nx === goal[0] && ny === goal[1]) break
                que.push([nx, ny]);
            }
        }
    }
    
    bfs(start[0], start[1])
    return board[goal[0]][goal[1]] ? board[goal[0]][goal[1]] : -1
}
