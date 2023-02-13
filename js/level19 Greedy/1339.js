const filePath = process.platform === "linux" ? "/dev/stdin" : "../input.txt";
let [N, ...input] = require("fs").readFileSync(filePath).toString().trim().split("\n");

// https://www.acmicpc.net/board/view/85400
let weight = {};

// weights
input.forEach((elem) => {
	for (let i = 0; i < elem.length; i++) {
    let pow = 10 ** (elem.length-i-1);
		if (weight[elem[i]]) {
			weight[elem[i]] += pow;
		} else {
			weight[elem[i]] = pow;
		}
	}
});

let num = 9;
weight = new Map(Object.entries(weight).sort((a,b) => b[1] - a[1]).map((elem) => [elem[0],num--]));

let ans = 0;
input.forEach((elem) => {
	for (let i = 0; i < elem.length; i++) {
		let pow = 10 ** (elem.length - i - 1);
		ans += parseInt(weight.get(elem[i])) * pow;
	}
});
console.log(ans);