function solution(r1, r2) {
    let ans = 0
    let big = r2**2, small = r1**2
    for(let x=1; x<=r2; x++){
        let maxY = Math.floor(Math.sqrt(r2**2 - x**2))
        if(x < r1){
            let minY = Math.ceil(Math.sqrt(r1**2 - x**2))   
            ans += (maxY - minY + 1)
        }
        else{
            ans += (maxY + 1);
        }
    }
    
    return ans*4
}