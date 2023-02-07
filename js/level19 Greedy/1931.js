const filePath = process.platform === "linux" ? "/dev/stdin" : "../input.txt";
let [T, ...input] = require("fs").readFileSync(filePath).toString().trim().split("\n");

let conference = input.map((elem) => elem.split(" ").map(Number))
	.sort((a, b) => {
		if(a[1] === b[1]) return a[0] - b[0];
    else return a[1] - b[1];	
});

let target = conference[0];
let ans = 1;
for(let i=1; i<Number(T); i++){
  if(target[1] <= conference[i][0]){
    ans++;
    target = conference[i];
  }
}
console.log(ans);


