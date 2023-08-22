function solution(input_string) {
    let map = new Map();
    let ans = [];
    
    input_string.split('').forEach((el) =>{
        map.set(el, map.has(el) ? map.get(el) + 1 : 1);
    })
    
    map.forEach((value, key) => {
        if(1 < value){
            let idx = input_string.indexOf(key);
            for(let i=idx; i <idx+value; i++){
                if(input_string[i] !== key) {
                    ans.push(key);
                    break;
                }            
            }
        }
    })

    return ans.length ? ans.sort().join('') : "N"
}