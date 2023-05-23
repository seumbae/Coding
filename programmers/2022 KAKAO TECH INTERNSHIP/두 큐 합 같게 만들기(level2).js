function solution(queue1, queue2) {
    let que1 = queue1.reduce((acc, cur) => acc+cur, 0)
    let que2 = queue2.reduce((acc, cur) => acc+cur, 0)
    const total = que1 + que2;
    
    if(queue1.some(el => el > Math.floor(total/2)) || queue2.some(el => el > Math.floor(total/2)))
        return -1;
    
    let cnt = 0
    while(que1 !== que2){
        if(queue1[0] === Math.floor(total/2)){
            que1 -= queue1[0]
            que2 += queue1[0]
            queue2.push(queue1.shift())
            
        }
        else if(queue2[0] === Math.floor(total/2)){
            que2 -= queue2[0]
            que1 += queue2[0]
            queue1.push(queue2.shift())
        }
        else if(que1 < que2){
            que2 -= queue2[0]
            que1 += queue2[0]
            queue1.push(queue2.shift())
        }
        else if(que2 < que1){
            que1 -= queue1[0]
            que2 += queue1[0]
            queue2.push(queue1.shift())
        }
        cnt++
    }
    return cnt
    
}