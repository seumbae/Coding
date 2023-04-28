function solution(numbers) {
    let ans = []
    numbers.forEach((number) => {
        let num = number+1
        while(true){
            //XOR 연산: 대응되는 비트가 다른 경우 1을 반환
            let cnt = (number^num).toString(2).split('').filter((elem) => elem === '1').length
            if(cnt <= 2){
                ans.push(num)
                break
            }
            num++
        }
    })
    return ans
}