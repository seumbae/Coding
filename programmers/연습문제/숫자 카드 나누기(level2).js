const gcd = (a, b) => {
    if(a < b) [a, b] = [b, a]
    
    if(b === 0) return a
    else return gcd(b, a%b)
}

const check = (arr, a) =>{
    let cnt = 0 
    for(let i=0; i<arr.length; i++){
        if(arr[i]%a === 0) cnt++
    }
    return cnt
}

function solution(arrayA, arrayB) {
    let ans;
    let a = gcd(arrayA[0], arrayA[1])
    let b = gcd(arrayB[0], arrayB[1]);
    
    for(let i=2; i<arrayA.length; i++){
        a = gcd(a, arrayA[i]);
    }
    for(let i=2; i<arrayB.length; i++){
        b = gcd(b, arrayB[i]);
    }
    if(a < b){
        if(check(arrayA, b) === 0 && check(arrayB, b) === arrayB.length) return b
    }
    else if(b < a){
        if(check(arrayA, a) === arrayA.length && check(arrayB, a) === 0) return a
    }
    return 0
}
