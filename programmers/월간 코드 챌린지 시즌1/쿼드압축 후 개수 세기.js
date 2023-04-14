function solution(arr) {
    let ans = [0, 0]
    //분할 정복, 재귀
    const recursive = (x, y, len) => {
        if(len === 0) ans[arr[x][y]]++
        
        let divide = false
        for(let row = x; row <x+len; row++){
            for(let col = y; col<y+len; col++){
                if(arr[x][y] !== arr[row][col]){
                    divide = true
                    break
                }
            }
            if(divide) break
        }
        
        if(divide){
            recursive(x, y, len/2) //1
            recursive(x, y+len/2, len/2) //2
            recursive(x+len/2, y, len/2) //3
            recursive(x+len/2, y+len/2, len/2) //4
        }
        else{
            ans[arr[x][y]]++
        }
        
    }
    recursive(0, 0, arr.length)
    
    return ans
}