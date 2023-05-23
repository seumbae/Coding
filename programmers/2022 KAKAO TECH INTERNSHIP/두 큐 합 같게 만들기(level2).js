function solution(queue1, queue2) {
    let que1 = queue1.reduce((acc, cur) => acc+cur, 0)
    let que2 = queue2.reduce((acc, cur) => acc+cur, 0)
    const total = que1 + que2;
    
    if(queue1.some(el => el > Math.floor(total/2)) || queue2.some(el => el > Math.floor(total/2)) || total%2 !== 0)
        return -1;
    
    let cnt = 0
    let val = que1 - que2;
    let q1 = 0, q2 = 0;
    const maxCnt = queue1.length*3

    while(cnt < maxCnt && val !== 0){
        if(val < 0){ //que1 < que2
            const v = queue2[q2++]
            queue1.push(v)
            val += (v*2)
        }
        else{
            const v = queue1[q1++]
            queue2.push(v)
            val -= (v*2)
        }
        cnt++
    }
    return val === 0 ? cnt : -1
}