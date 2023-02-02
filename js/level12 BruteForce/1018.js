const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "../input.txt";
let [size,...input] = fs.readFileSync(filePath).toString().trim().split('\n');

const [N,M] = size.split(' ').map(e=>+e-8);

// const diff = (chess) => {
//   const Bdiff = 'BWBWBWBW';
//   const Wdiff = 'WBWBWBWB';
//   const chessArr = chess.map(elem => elem.split(''));
//   const first = chess[0][0] === 'B' ? 'B' : 'W';
//   let Bcnt = 0;
//   for(let i=0; i<4; i++){
//     Bcnt += chessArr[i*2].reduce((prev, curr, curIdx) => prev + (curr === Bdiff[curIdx]), 0);
//     Bcnt += chessArr[i*2+1].reduce((prev, curr, curIdx) => prev + (curr === Wdiff[curIdx]), 0);
//   }
//   let Wcnt = 0;
//   for(let i=0; i<4; i++){
//     Wcnt += chessArr[i*2].reduce((prev, curr, curIdx) => prev + (curr === Wdiff[curIdx]), 0);
//     Wcnt += chessArr[i*2+1].reduce((prev, curr, curIdx) => prev + (curr === Bdiff[curIdx]), 0);
//   }

//   return 64-Math.max(Bcnt, Wcnt);
// }

const diff = (chess) => {
  const strDiff = (str1, str2) => {
    let diff = 0;
    for(let i=0; i<64; i++){
      if(str1[i] !== str2[i]) diff++;
    }
    return diff;
  }
  const BW = 'BWBWBWBWWBWBWBWBBWBWBWBWWBWBWBWBBWBWBWBWWBWBWBWBBWBWBWBWWBWBWBWB';
  const WB = 'WBWBWBWBBWBWBWBWWBWBWBWBBWBWBWBWWBWBWBWBBWBWBWBWWBWBWBWBBWBWBWBW';

  const chessStr = chess.join('');
  const [BWcnt, WBcnt] = [strDiff(chessStr, BW), strDiff(chessStr, WB)];
  return Math.min(BWcnt, WBcnt);
}

let min = 64;
for(let i=0; i<=M; i++){
  for(let j=0; j<=N; j++){
    const chess = [];
    let row = j;
    for(let k=0; k<8; k++){
      chess.push(input[row++].substring(i, i+8));
    }
    min = Math.min(min, diff(chess));
  }
}

console.log(min);

