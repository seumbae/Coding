const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "../input.txt";
const [input, ...numbers] = fs.readFileSync(filePath).toString().trim().split("\n");

const number = numbers.map(Number).sort((a, b) => a - b);
const arithmeticMean = Math.round(
	number.reduce((prev, curr) => prev + curr, 0) / Number(input)
);
const mid = number[Math.floor(Number(input) / 2)];

const cnt = number.reduce((prev, curr) => {
	prev[curr] = (prev[curr] || 0) + 1;
	return prev;
}, {});

const maxValue = Math.max(...Object.values(cnt));
const mode = Object.entries(cnt)
	.sort((a, b) => {
		if (b[1] === a[1]) {
			return Number(a[0]) - Number(b[0]);
		}
		return b[1] - a[1];
	})
	.filter((elem) => elem[1] === maxValue);
const range = number[Number(input) - 1] - number[0];

console.log(`${arithmeticMean}\n${mid}\n${mode.length === 1 ? mode[0][0] : mode[1][0]}\n${range}`);
