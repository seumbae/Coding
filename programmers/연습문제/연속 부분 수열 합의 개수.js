function solution(elements) {
    let ans = new Set();
    
    for(let i=0; i<elements.length; i++){ //몇개인지
        for(let j=0; j<elements.length; j++){
            let sum = 0
            let cnt = 0, k = j
            while(cnt !== i+1){
                sum += elements[k]
                k = (k+1) % elements.length
                cnt++
            }
            ans.add(sum)
        }
    }
    return ans.size
}