const filePath = process.platform === "linux" ? "/dev/stdin" : "../input.txt";
let input = require("fs").readFileSync(filePath).toString().trim().split('\n');

let T = +input.shift();

for(let i=0; i<T; i++){
  const N = +input.shift();
  const applicant = input.splice(0, N).map((elem) => elem.split(' ').map(Number)).sort((a, b) => b[0] - a[0]);
  let ans = N;
  for(let j=0; j<N-1; j++){ //이 부분에서 시간초과 발생하는 듯
    for(let k=j+1; k<N; k++){
      if(applicant[j][1] > applicant[k][1]){ans--; break}
    }
  }
  console.log(ans);
}