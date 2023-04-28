function solution(s) {
    let ans = 0;
    
    let arr = s.split('');
    for(let i=0; i<s.length; i++){
        arr.push(arr.shift())
        let flag = true
        let stk = []
        for(let j=0; j<arr.length; j++){
            if(arr[j] === '[' || arr[j] === '(' || arr[j] === '{')
                stk.push(arr[j])
            else{
                if(arr[j] === ']'){
                    if(stk[stk.length-1] !== '['){
                        flag = false;
                        break
                    }
                    else stk.pop()
                }
                if(arr[j] === ')'){
                    if(stk[stk.length-1] !== '('){
                        flag = false;
                        break   
                    }
                    else stk.pop()
                }
                
                if(arr[j] === '}'){
                    if(stk[stk.length-1] !== '{'){
                        flag = false;
                        break   
                    }
                    else stk.pop()
                }
            }
        }
        if(flag && stk.length === 0) ans++
    }
    return ans
}
