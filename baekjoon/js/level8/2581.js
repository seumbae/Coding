const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "../input.txt";
const [M, N] = fs.readFileSync(filePath).toString().trim().split("\n").map(Number);

const primes = [];

const is_prime = (num) => {
	if (num === 1) return false;
	for (let i = 2; i < num; i++) {
		if (num % i === 0) return false;
	}
	return true;
};

for (let i = M; i <= N; i++) {
	is_prime(i) ? primes.push(i) : null;
}

if (primes.length === 0) console.log(-1);
else {
	const sum = primes.reduce((prev, curr) => prev + curr, 0);
	const min = Math.min(...primes);
	console.log(`${sum}\n${min}`);
}
