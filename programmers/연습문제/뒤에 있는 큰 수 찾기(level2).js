function solution(numbers) {
    let ans = Array(numbers.length).fill(-1);
    
    const stack = [0]
    
    numbers.forEach((el, idx) => {
        while(numbers[stack.at(-1)] < el){
            ans[stack.pop()] = el
        }
        stack.push(idx);
    })
    
    return ans
}