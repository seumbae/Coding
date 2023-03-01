const diff = (toPress, left, right, hand) => {
	const leftDiff =
		Math.abs(toPress[0] - left[0]) + Math.abs(toPress[1] - left[1]);
	const rightDiff =
		Math.abs(toPress[0] - right[0]) + Math.abs(toPress[1] - right[1]);

	if (leftDiff === rightDiff) return hand[0].toUpperCase();
	return leftDiff < rightDiff ? "L" : "R";
};
function solution(numbers, hand) {
	var ans = "";
	const keypad = {
		1: [0, 0],
		2: [0, 1],
		3: [0, 2],
		4: [1, 0],
		5: [1, 1],
		6: [1, 2],
		7: [2, 0],
		8: [2, 1],
		9: [2, 2],
		"*": [3, 0],
		0: [3, 1],
		"#": [3, 2],
	};
	let currLeft = [3, 0];
	let currRight = [3, 2];

	numbers.forEach((elem) => {
		if ([1, 4, 7].includes(elem)) {
			ans += "L";
			currLeft = keypad[elem];
		} else if ([3, 6, 9].includes(elem)) {
			ans += "R";
			currRight = keypad[elem];
		} else {
			const pressHand = diff(keypad[elem], currLeft, currRight, hand);
			ans += pressHand;
			pressHand === "L"
				? (currLeft = keypad[elem])
				: (currRight = keypad[elem]);
		}
	});
	return ans;
}
