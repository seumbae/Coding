const filePath = process.platform === "linux" ? "/dev/stdin" : "../input.txt";
let r = +require("fs").readFileSync(filePath).toString().trim();

console.log((Math.pow(r,2)*Math.PI).toFixed(6));
console.log((2*r*r).toFixed(6));
