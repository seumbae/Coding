function solution(elements) {
    let ans = new Set();

    const len = elements.length;
    elements = elements.concat(elements)
    
    for(let pos = 0; pos < len; pos++){
        let sum = 0
        for(let j = 0; j<len; j++){
            sum += elements[pos+j]
            ans.add(sum)
        }
    }
    return ans.size
}