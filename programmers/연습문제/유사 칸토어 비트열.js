function solution(n, l, r) {
    let ans = 0;
    
    const check = (pos) => {
        if(pos < 5 && pos !== 2) return true;
        if(pos%5 === 2) return false;
        
        return check(Math.floor(pos/5));
    }

    for(let i=l-1; i<r; i++){
        if(check(i)) ans++;
    }
    
    return ans;
}