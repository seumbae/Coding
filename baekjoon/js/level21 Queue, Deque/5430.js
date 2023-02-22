const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "../input.txt";
let input = fs.readFileSync(filePath).toString().trim().split('\n');
const T = input.shift();

let ans = [];
// Case1: Deque활용
// for(let i=0; i<T; i++){
//   const func = input[i*3].split('');
//   const n = +input[i*3 + 1];
//   // const arr = input[i*3 + 2].replace(/[,\[\]]/g,'').split('');
//   // const arr = input[i*3 + 2].replace(/[\[\]]/g,'').split(',');
//   const arr = JSON.parse(input[i*3 + 2]);
//   const deleteCount = func.reduce((prev, curr) => prev + (curr === 'D'),0);
//   let isReversed = false;

//   if(arr.length < deleteCount){
//     ans.push('error');
//     continue;
//   }
//   for(let j=0; j<func.length; j++){
//     if(func[j] === 'R') isReversed = !isReversed;
    
//     if(func[j] === 'D'){
//       if(isReversed) arr.pop();
//       else arr.shift();
//     }
//   }

//   if(isReversed){
//     arr.reverse();
//   }
  
//   ans.push(JSON.stringify(arr));
// }
// console.log(ans.join('\n'));

// Case2: index 활용
// for(let i=0; i<T; i++){
//   const func = input[i*3].split('');
//   const n = +input[i*3 + 1];
//   const arr = JSON.parse(input[i*3 + 2]);

//   let [head, tail] = [0, arr.length];
//   let isReversed = false;
//   let isError = false;
  
//   for(let j=0; j<func.length; j++){
//     if(func[j] === 'R')  isReversed = !isReversed;
//     else{
//       if(tail <= head){
//         isError = true;
//         break;
//       }
//       else{
//         if(isReversed) tail--;
//         else head++;
//       }
//     }
//   }
//   if(isError){
//     ans.push('error');
//     continue;
//   }
//   if(isReversed) ans.push(JSON.stringify(arr.slice(head, tail).reverse()));
//   else ans.push(JSON.stringify(arr.slice(head, tail)));
// }
// console.log(ans.join('\n'));