function solution(plans) {
    let ans = []
    
    let stack = []
    
    for(let i=0; i<plans.length; i++){
        let [hour, min] = plans[i][1].split(':').map(e => +e);
        plans[i][1] = hour*60 + min;
        plans[i][2] = Number(plans[i][2]);
    }
    plans.sort((a, b) => a[1] - b[1]);
    
    //끝나는 시간이 아닌, 남아있는 시간을 넣어주며 갱신할 필요가 있다.
    for(let i=0; i<plans.length-1; i++){
        if(plans[i][1] + plans[i][2] <= plans[i+1][1]){
            ans.push(plans[i][0]);
            
            let gap = plans[i+1][1] - plans[i][1] - plans[i][2];
            while(stack.length && gap){
                if(gap < stack.at(-1)[1]){
                    stack.at(-1)[1] -= gap
                    gap = 0;
                }
                else{
                    let removed = stack.pop();
                    ans.push(removed[0]);
                    gap -= removed[1];   
                }
            }
        }
        else{
            stack.push([plans[i][0], plans[i][1]+plans[i][2]-plans[i+1][1]]);
        } 
    }
    ans.push(plans.at(-1)[0])
    while(stack.length){
        ans.push(stack.pop()[0])
    }
    
    return ans
}