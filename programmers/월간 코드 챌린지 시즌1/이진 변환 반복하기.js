//Case 1
function solution(s) {
    let ans = [0, 0]
    while(s !== '1'){
        ans[1] += s.match(/0/g)?.length || 0
    
        ans[0]++
        s = s.replaceAll('0','').length.toString(2)
    }
    return ans
}

//Case 2
function solution(s) {
    let ans = [0, 0]
    while(s !== '1'){
        for(let num of s)
            if(num === '0') ans[1]++
    
        ans[0]++
        s = s.split('0').join('').length.toString(2)
        
    }
    return ans
}