const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "../input.txt";
let [a, b, c] = fs.readFileSync(filePath).toString().trim().split(" ").map(Number);

c-b <= 0 ? console.log(-1) : console.log(Math.floor(a/(c-b))+1);

/* 소수점을 버리기 위해 parseInt를 사용하면 안되는 이유
 parseInt()는 문자열을 정수로 변환(추출)하기 위한 용도로 사용합니다. 
 그렇기 때문에 parseInt()는 수를 버림하는 로직과는 작동 방식이 다릅니다.

1234.5678 같은 소수가 입력값으로 들어오면 '.' 이전의 정수 부분이 추출되어 1234가 반환됩니다(버림 효과를 냅니다).
이런 식으로 parseInt()는 정수를 추출하는 방법을 사용하기 때문에, 이 경우 의도와 다른 결과가 나올 수 있습니다.
-1234.5678 이 입력값으로 주어질 경우 '.' 이전의 정수 부분인 -1234가 추출되어 -1234가 반환됩니다. 결과적으로 버림이 아닌 올림한 효과와 같습니다.
0.00000000000003 같은 자릿수가 너무 높은 값이 입력값으로 주어질 경우 의도했던 0과 달리 3이 반환됩니다. 
왜냐하면 위 수는 실제로 3e-14(3에 10의 -14승을 곱한 값) 로 간주되고, 그에 따라 맨 앞의 정수값인 '3' 이 추출되기 때문입니다. (틀린 이유)
 */