const normalBFS = (x, y, color) => {
	visited1[x][y] = true;

	let que = [[x, y]];
	while (que.length) {
		const [x, y] = que.shift();
		for (item of ways) {
			const nx = x + item[0];
			const ny = y + item[1];

			if (
				nx < 0 ||
				N <= nx ||
				ny < 0 ||
				N <= ny ||
				graph[nx][ny] !== color ||
				visited1[nx][ny] === true
			)
				continue;
			que.push([nx, ny]);
			visited1[nx][ny] = true;
		}
	}
};
const blindBFS = (x, y) => {
	visited2[x][y] = true;

	let que = [[x, y]];
	while (que.length) {
		const [x, y] = que.shift();
		for (item of ways) {
			const nx = x + item[0];
			const ny = y + item[1];

			if (nx < 0 || N <= nx || ny < 0 || N <= ny || visited2[nx][ny] === true)
				continue;
			if (
				blindGraph[x][y] === blindGraph[nx][ny] ||
				(blindGraph[x][y] === "R" && blindGraph[nx][ny] === "G") ||
				(blindGraph[x][y] === "G" && blindGraph[nx][ny] === "R")
			) {
				visited2[nx][ny] = true;
				que.push([nx, ny]);
			}
		}
	}
};

const filePath = process.platform === "linux" ? "/dev/stdin" : "../input.txt";
let input = require("fs").readFileSync(filePath).toString().trim().split("\n");

const N = +input.shift();
const graph = input.map((e) => e.split(""));
const blindGraph = input.map((e) => e.split(""));
const visited1 = [...new Array(N)].map((e) => Array(N).fill(false));
const visited2 = [...new Array(N)].map((e) => Array(N).fill(false));
const ways = [
	[-1, 0],
	[1, 0],
	[0, -1],
	[0, 1],
];

let normal = 0;
let blind = 0;
for (let i = 0; i < N; i++) {
	for (let j = 0; j < N; j++) {
		if (visited1[i][j] === false) {
			normalBFS(i, j, graph[i][j]);
			++normal;
		}
		if (visited2[i][j] === false) {
			blindBFS(i, j);
			++blind;
		}
	}
}
console.log(normal, blind);
