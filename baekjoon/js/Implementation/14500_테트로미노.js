const filePath = process.platform === "linux" ? "/dev/stdin" : "../input.txt";
const input = require("fs")
	.readFileSync(filePath)
	.toString()
	.trim()
	.split("\n");

const [n, m] = input
	.shift()
	.split(" ")
	.map((e) => +e);
const board = input.map((el) => el.split(" ").map((e) => +e));
let ans = Number.MIN_SAFE_INTEGER;

const blocks = [
	//l
	[[1, 1, 1, 1]],
	[[1], [1], [1], [1]],
	//o
	[
		[1, 1],
		[1, 1],
	],
	// r
	[
		[1, 1],
		[1, 0],
		[1, 0],
	],
	[
		[1, 0],
		[1, 0],
		[1, 1],
	],
	[
		[1, 1],
		[0, 1],
		[0, 1],
	],
	[
		[0, 1],
		[0, 1],
		[1, 1],
	],
	[
		[1, 1, 1],
		[1, 0, 0],
	],
	[
		[1, 1, 1],
		[0, 0, 1],
	],
	[
		[1, 0, 0],
		[1, 1, 1],
	],
	[
		[0, 0, 1],
		[1, 1, 1],
	],
	//z
	[
		[1, 0],
		[1, 1],
		[0, 1],
	],
	[
		[0, 1],
		[1, 1],
		[1, 0],
	],
	[
		[0, 1, 1],
		[1, 1, 0],
	],
	[
		[1, 1, 0],
		[0, 1, 1],
	],
	//t
	[
		[1, 1, 1],
		[0, 1, 0],
	],
	[
		[0, 1, 0],
		[1, 1, 1],
	],
	[
		[0, 1],
		[1, 1],
		[0, 1],
	],
	[
		[1, 0],
		[1, 1],
		[1, 0],
	],
];

const calc = (block, width, height, row, col) => {
	let sum = 0;
	for (let i = 0; i < width; i++) {
		for (let j = 0; j < height; j++) {
			sum += board[i + row][j + col] * block[i][j];
		}
	}
	return sum;
};

const getMax = (origin) => {
	let res = Number.MIN_SAFE_INTEGER;
	for (let i = 0; i <= n - origin.length; i++) {
		for (let j = 0; j <= m - origin[0].length; j++) {
			res = Math.max(res, calc(origin, origin.length, origin[0].length, i, j));
		}
	}
	return res;
};

blocks.forEach((block) => {
	ans = Math.max(ans, getMax(block));
});
console.log(ans);
