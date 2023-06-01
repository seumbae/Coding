const filePath = process.platform === "linux" ? "/dev/stdin" : "../input.txt";
const input = require('fs').readFileSync(filePath).toString().trim().split('\n')

const [n, m] = input.shift().split(' ').map(e => +e)
let [r, c, d] = input.shift().split(' ').map(e => +e)
const room = input.map(el => el.split(' ').map(e => +e))
//d: 0북 1동 2 남 3서, 반시계: 북 -> 서 -> 남 -> 동
//북 [-1, 0], 동 [0, -1], 남 [1, 0], 서 [0, -1] 2+2 % 4 -> 0
const dir = [[-1, 0], [0, 1], [1, 0], [0, -1]]
let cnt = 0
let ans = 0
while(true){
    // console.log('cur', r, c, d)
    // if(cnt === 20) break
    if(room[r][c] === 0){
        ans++;
        room[r][c] = 1
    }
    let flag = false;
    for(let i=0; i<4; i++){
        let [nx, ny] = [r + dir[i][0], c + dir[i][1]];
        if(0 <= nx && nx < n && 0 <= ny && ny < m && room[nx][ny] === 0){
            flag = true;
            break;
        }
    }

    if(flag){ //빈칸이 있는 경우
        d = (d+3) % 4
        let [nx, ny] = [r + dir[d][0], c+dir[d][1]]
        if(0 <= nx && nx < n && 0 <= ny && ny < m && room[nx][ny] === 0){
            r = nx, c = ny;
        }
    }
    else{ // 빈칸이 없는 경우
        //TODO: 후진하고 벽체크하는 부분을 건드려야 할듯
        let backPos = (d+2) % 4;
        let [nx, ny] = [r + dir[backPos][0], c + dir[backPos][1]]
        if(nx < 0 || n <= nx || ny < 0  || m <= ny || room[nx][ny] === 1) break;
        r = nx, c = ny;
    }
}
console.log(ans)