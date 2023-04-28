function solution(n, left, right) {
    const arr = []
 
    // ~~는 Math.floor처럼 소수점 버리기에 사용할 수 있다.
    for(let i = left; i <= right; i++){
        arr.push(Math.max(~~(i/n), i%n)+1)
    }
    return arr
}