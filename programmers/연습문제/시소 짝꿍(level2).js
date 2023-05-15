function solution(weights) {
    let ans = 0
    let map = new Map();
    let ratios = [1, 2/3, 3/4, 1/2];
    
    weights.sort((a, b) => a-b)
    weights.forEach(w => {
        ratios.forEach(r => {
            if(map.has(w*r)) ans += map.get(w*r)
        })
        map.set(w, (map.get(w) || 0) + 1);
    })

    return ans
}