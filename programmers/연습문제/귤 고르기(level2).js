// NlogN
function solution(k, tangerine) {
    let map = new Map();
    tangerine.forEach((el) => {
        map.set(el, (map.get(el) || 0)+1)
    })
    let arr = [...map.values()].sort((a, b) => b-a);
    
    for(let i=0; i<arr.length; i++){
        k -= arr[i]
        if(k <= 0) return i+1
    }

}