const filePath = process.platform === "linux" ? "/dev/stdin" : "../input.txt";
let input = require("fs").readFileSync(filePath).toString().trim().split('\n');

let T = +input.shift();

for(let i=0; i<T; i++){
  const N = +input.shift();
  const applicant = input.splice(0, N).map((elem) => elem.split(' ').map(Number)).sort((a, b) => a[0] - b[0]);
  let ans = N;
  
  let target = applicant[0][1];
  for(let j=1; j<N; j++){
    if(applicant[j][1] < target){
      target = applicant[j][1];
    }
    else ans--;
  }
  console.log(ans);
}