function solution(weights) {
    let ans = 0;
    let len = weights.length;
    
    for(let i=0; i<len-1; i++){
        for(let j=i+1; j<len; j++){
            if(weights[i] === weights[j]) ans++;
            else if(weights[i] * 2 === weights[j]*3) ans++;
            else if(weights[i] * 2 === weights[j]*4) ans++;
            else if(weights[i] * 3 === weights[j]*2) ans++;
            else if(weights[i] * 3 === weights[j]*4) ans++;
            else if(weights[i] * 4 === weights[j]*2) ans++;
            else if(weights[i] * 4 === weights[j]*3) ans++;
        }
    }
    return ans
}