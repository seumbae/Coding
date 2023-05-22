function solution(order) {
    const stack = []
    let orderIdx = 0
    
    for(let i=0; i<order.length; i++){
        let box = i+1;
        
        if(order[orderIdx] === box) orderIdx++;
        else stack.push(box);
        
        while(stack.length && stack.at(-1) === order[orderIdx]){
            stack.pop()
            orderIdx++;
        }
    }

    return orderIdx
}