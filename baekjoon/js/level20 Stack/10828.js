const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "../input.txt";
let [N,...input] = fs.readFileSync(filePath).toString().trim().split("\n");

const stack = [];
const ans = [];

input.forEach((elem) => {
	switch (elem) {
		case "top":
      ans.push(stack[stack.length-1] || -1)
			break;
		case "size":
      ans.push(stack.length);
			break;
		case "empty":
      ans.push(stack.length ? 0 : 1);
			break;
		case "pop":
			ans.push(stack.pop() || -1);
			break;
    default:
      stack.push(Number(elem.split(' ')[1]));
	}
});
console.log(ans.join('\n'))