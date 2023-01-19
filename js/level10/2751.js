const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "../input.txt";
const [input, score] = fs.readFileSync(filePath).toString().trim().split("\n");

/**
 * O(nlogn) 정렬 알고리즘
 * Quick - Best(nlogn), Avg(nlogn), Worst(n^2) 
 * Merge - Best(nlogn), Avg(nlogn), Worst(nlogn)
 * Heap - Best(nlogn), Avg(nlogn), Worst(nlogn)
 */