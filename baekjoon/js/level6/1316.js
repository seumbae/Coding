const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "../input.txt";
let [n, ...input] = fs.readFileSync(filePath).toString().trim().split("\n");

let ans = Number(n);

input.forEach((elem) => {
	const item = elem.split("");

	for (let i = 0; i < item.length; i++) {
		const alpha = item[i];
    let flag = false;
		for (let j = i + 1; j < item.length; j++) {
			if (alpha === item[j] && item[j - 1] !== item[j]) {
        flag = true;
        // ans--;
				break;
			}
		}
    if(flag){
      ans --; break;
    }
	}
});

console.log(ans);
