const filePath = process.platform === "linux" ? "/dev/stdin" : "../input.txt";
let input = require("fs").readFileSync(filePath).toString().trim().split("\n");


let [N, M] = input.shift().split(' ').map(Number);
// Case 1:
// let prices = input.map((elem) => elem.split(' ').map(Number)).sort((a, b) => a[0] - b[0]);

// let weights = [];
// let pkg = Math.ceil(N/6);
// for(let i=0; i<=pkg; i++){
//   let pieces = N < i*6 ? N : i*6;
//   for(let j=0; j<M; j++){
//     weights.push((prices[0][0]*i) + (prices[j][1]*(N-pieces)));
//   }
// }
// console.log(Math.min(...weights));

// Case 2:
// let pkgs = [];
// let pieces = [];

// input.forEach((elem) => {
//   const [pkg, piece] = elem.split(' ').map(Number);
//   pkgs.push(pkg);
//   pieces.push(piece);
// })

// const minPkg = Math.min(...pkgs);
// const minPiece = Math.min(...pieces);

// console.log(Math.min(minPkg*Math.ceil(N/6), minPiece*N, Math.floor(N/6)*minPkg + N%6*minPiece));