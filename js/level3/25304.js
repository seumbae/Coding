const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "../input.txt";
const [total, n, ...arr] = fs
	.readFileSync(filePath)
	.toString()
	.trim()
	.split("\n");

let sum = 0;

arr.forEach((item) => {
	const [price, cnt] = item.split(" ");
	sum += Number(price) * Number(cnt);
});

if (sum === Number(total)) {
	console.log("Yes");
} else {
	console.log("No");
}
