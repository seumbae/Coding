const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "../input.txt";
let input = fs.readFileSync(filePath).toString().trim().split("\n").map(Number);

const isPrime = (num) => {
	if (num === 1 || num === 0) return false;
	for (let i = 2; i <= Math.sqrt(num); i++) {
		if (num % i === 0) return false;
	}
	return true;
};

input.forEach((elem) => {
	if (elem) {
		let primes = 0;
		for (let i = elem+1; i <= elem * 2; i++) {
			isPrime(i) ? primes++ : null;
		}
		console.log(primes);
	}
});
