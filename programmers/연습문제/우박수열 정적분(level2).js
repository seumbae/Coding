function solution(k, ranges) {
    const accArea = [0]
    const ans = []
    
    while(true){
        if(k === 1) break
        let next = k % 2 === 0 ? k/2 : k*3+1
        accArea.push(accArea.at(-1) + (k + next)/2);
        k = next
    }
    
    ranges.forEach(([start, end]) =>{
        if(accArea.length + end - 1 < start) ans.push(-1.0)
        else{
            ans.push(accArea[accArea.length + end - 1] - accArea[start])
        }
    })
    
    
    return ans
}