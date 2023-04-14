function solution(numbers) {
    const set = new Set()
    
    numbers.forEach((number, idx) => {
        for(let i=idx+1; i<numbers.length; i++){
            set.add(number+numbers[i])
        }
    })
    return [...set].sort((a, b) => a-b)
}