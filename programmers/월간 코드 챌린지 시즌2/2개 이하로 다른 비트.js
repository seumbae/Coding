function solution(numbers) {
    //XOR 연산: 대응되는 비트가 다른 경우 1을 반환
    //number의 최대값이 10^15인데, 비트 연산자를 사용할 경우 32비트로 변환하고 상위 32비트는 버림으로써 다른 수가 되어버린다.
    //따라서 비트연산자 사용 못함
    let ans = []
    numbers.forEach((number) => {
        if(number % 2 === 0){
            ans.push(number+1)
        }
        //홀수인경우
        else{
            const str = ['0', ...number.toString(2).split('')]
            const idx = str.lastIndexOf('0')
            str[idx] = '1'; str[idx+1] = '0';
            ans.push(parseInt(str.join(''), 2))
        }
    })
    return ans
}