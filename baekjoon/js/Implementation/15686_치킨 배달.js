const filePath = process.platform === "linux" ? "/dev/stdin" : "../input.txt";
const input = require('fs').readFileSync(filePath).toString().trim().split('\n')

const [n, m] = input.shift().split(' ').map(e => +e);
const cities = input.map(e => e.split(' ').map(Number));
const chicken = [];
const combinations = [];
const tmp = Array(m);
let ans = Number.MAX_SAFE_INTEGER;

const getChicken = () => {
    for(let i=0; i<n; i++){
        for(let j=0; j<n; j++){
            if(cities[i][j] === 2){
                chicken.push([i+1, j+1])
            }
        }
    }
}

const getCombination = (depth, idx) => { //not close 조합
    if(depth === m){
        combinations.push(tmp.slice());
    }
    else{
        for(let i=idx; i<chicken.length; i++){
            tmp[depth] = chicken[i];
            getCombination(depth+1, i+1);
        }
    }
}
const getDist = (store) => {
    let sum = 0;
    for(let i=0; i<n; i++){
        for(let j=0; j<n; j++){
            if(cities[i][j] === 1){
                let dist =  Number.MAX_SAFE_INTEGER;
                for(let k=0; k<m; k++){
                    const [r, c] = store[k];
                    dist = Math.min(dist, Math.abs(r-(i+1)) + Math.abs(c-(j+1)));
                }
                sum += dist;
            }
        }
    }
    return sum;
}

getChicken();
getCombination(0, 0);
for(let i=0; i<combinations.length; i++){
    const dist = getDist(combinations[i])
    ans = Math.min(ans, dist);
}

console.log(ans)