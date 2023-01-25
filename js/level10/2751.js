const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "../input.txt";
const [input, ...numbers] = fs.readFileSync(filePath).toString().trim().split("\n");

/**
 * O(nlogn) 정렬 알고리즘
 * Tim - Best(n), Avg(nlogn), Worst(nlogn);
 * Quick - Best(nlogn), Avg(nlogn), Worst(n^2) 
 * Merge - Best(nlogn), Avg(nlogn), Worst(nlogn)
 * Heap - Best(nlogn), Avg(nlogn), Worst(nlogn)
 */

/**
 * Tim Sort
 */

const ans = numbers.map(Number).sort((a,b) => a-b);
console.log(ans.join('\n'));

