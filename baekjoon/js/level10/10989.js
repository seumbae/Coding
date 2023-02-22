const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "../input.txt";
const [input, ...numbers] = fs.readFileSync(filePath).toString().trim().split("\n");

/**
 * nodejs로는 메모리 초과로인한 채점 불가능
 * nodejs로 맞힌 사람이 존재하지 않음 
 */

/**
 * @param {Array} arr 
 */
const countingSort = (arr) => {
  let sorted = [];
  const len = arr.length;
  
  let ans = ''
  for(let i=0; i<len; i++){
    !!sorted[arr[i]] ? sorted[arr[i]]++ : sorted[arr[i]] = 1;
  }

  for(let i=0; i<len; i++){
    for(let j=0; j<sorted[i]; j++){
      ans += i + '\n';
    }
  }
  console.log(ans);
}

countingSort(numbers.map(Number));