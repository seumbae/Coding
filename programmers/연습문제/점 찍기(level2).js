function solution(k, d) {
    var ans = 0;
    
    for(let x = 0; x<=d; x += k){
        let maxY = Math.sqrt(d**2 - x**2)
        ans += Math.floor((maxY/k))+1
    }
    
    return ans;
}