const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "../input.txt";
const [n, ...input] = fs.readFileSync(filePath).toString().trim().split("\n").map(Number);

/**
 * O(n^2): 삽입정렬, 거품정렬, 선택정렬
 */

/* 거품정렬 Best(n^2), Avg(n^2), Worst(n^2)
const bubble = (elem) => {
	for (i = 0; i < n ; i++) {
		for (j = 0 ; j < n - i; j++) {
			if (elem[j] > elem[j+1]) {
				[elem[j], elem[j+1]] = [elem[j+1], elem[j]];
			}
		}
	}
	console.log(elem.join('\n'));
};

bubble(input);
*/

//Selection Best(n^2), Avg(n^2), Worst(n^2)
const Selection = (elem) => {
  for(let i=0; i<n; i++){
    let min_idx = i;
    for(let j=i+1; j<n; j++){
      if(elem[min_idx] > elem[j]){
        min_idx = j;
      }
    }
    [elem[i], elem[min_idx]] = [elem[min_idx], elem[i]];
  }
  console.log(elem.join('\n'));
}
Selection(input);