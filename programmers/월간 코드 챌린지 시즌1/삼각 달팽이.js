function solution(n) {
    let [row, col] = [-1, 0]
    let arr = [...new Array(n)].map((_, i) => Array(i+1))
    
    let cur = 1
    for(let i=0; i<n; i += 3){
        for(let j=i; j<n; j++){arr[++row][col] = cur++}
        for(let j=i+1; j<n; j++){arr[row][++col] = cur++}
        for(let j=i+2; j<n; j++){arr[--row][--col] = cur++}
    }
    return arr.flat()
}