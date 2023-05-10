function solution(m, n, startX, startY, balls) {
    let ans = []
    
    balls.forEach(([x, y]) => {
        let min = Number.MAX_SAFE_INTEGER
        
        if(startX !== x || startY < y)
            min = Math.min(min, (startX-x)**2 + (startY+y)**2);
        if(startY !== y || startX < x)
            min = Math.min(min, (startX+x)**2 + (startY-y)**2);
        if(startX !== x || y < startY)
            min = Math.min(min, (startX-x)**2 + (2*n-y-startY)**2);
        if(startY !== y || x < startX)
            min = Math.min(min, (2*m-x-startX)**2 + (startY-y)**2);
        ans.push(min);
    })
    return ans;
}