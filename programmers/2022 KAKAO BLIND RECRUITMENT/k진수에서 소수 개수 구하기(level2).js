const isPrime = (n) => {
    if(n === 1) return false;
    if(n === 2) return true;
    
    for(let i=2; i<=Math.sqrt(n); i++){
        if(n%i === 0) return false
    }
    return true;
}

function solution(n, k) {
    let ans = 0;
    n = n.toString(k).split('0').map(e => +e).filter(el => 1 < el)

    n.forEach((el) => {
        if(isPrime(el)) ans++
    })
    return ans
}