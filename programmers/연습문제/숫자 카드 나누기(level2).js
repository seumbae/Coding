const gcd = (a, b) => {
    if(a < b) [a, b] = [b, a]
    
    if(b === 0) return a
    else return gcd(b, a%b)
}


function solution(arrayA, arrayB) {
    let ans;
    let a = 2 <= arrayA.length ? gcd(arrayA[0], arrayA[1]) : arrayA[0]
    let b = 2 <= arrayB.length ? gcd(arrayB[0], arrayB[1]) : arrayB[0]
    
    for(let i=2; i<arrayA.length; i++){
        a = gcd(a, arrayA[i]);
    }
    for(let i=2; i<arrayB.length; i++){
        b = gcd(b, arrayB[i]);
    }
    if(a < b){
        if(!arrayA.some(e => e%b === 0)) return b
    }
    else if(b < a){
        if(!arrayB.some(e => e%a === 0)) return a
    }
    return 0
}
