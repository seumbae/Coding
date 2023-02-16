const filePath = process.platform === "linux" ? "/dev/stdin" : "../input.txt";
let [N, ...input] = require("fs").readFileSync(filePath).toString().trim().split("\n").map(Number);
// 반례: https://www.acmicpc.net/board/view/106796
input.sort((a, b) => {
  if(a < 0 && b < 0){
    return b - a;
  }
	return a - b;
});
console.log(input);
let ans = 0;

// 둘다 1이 넘는경우 -> *
// 한개만 1이 넘는경우 -> +
// 둘다 1이 넘지 않는경우 -> 0과 음수 ->*, 0과 1 -> +, 음수와 음수 -> *, else-> +

// 무조건 두개씩 뽑으면 안됨.
while (input.length) {
	let prev = input.pop();
	let next = input.pop();
	if (!next) {
		ans += prev;
		break;
	}

	if (1 < prev && 1 < next) {
		ans += prev * next;
	} else if (1 < prev || 1 < next) {
		ans += prev + next;
	} else {
		if (
			(prev === 0 && next < 0) ||
			(prev === 0 && next < 0) ||
			(prev < 0 && next < 0)
		) {
			ans += prev * next;
		}
		//((prev === 0 && next === 1) || (prev === 1 && next === 0))
		else {
			ans += prev + next;
		}
	}
}
console.log(ans);
