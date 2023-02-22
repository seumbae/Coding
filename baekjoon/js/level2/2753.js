const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "../input.txt";
const input = fs.readFileSync(filePath).toString().trim();

if (
	(input % 4 === 0 && input % 100 !== 0) ||
	(input % 4 === 0 && input % 400 === 0)
) {
	console.log(1);
}
console.log(0);
