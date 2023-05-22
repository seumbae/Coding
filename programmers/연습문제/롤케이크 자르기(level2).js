// 최대 NlogN. or N
function solution(topping) {
    let ans = 0;
    let map = new Map() //철수
    let bro = new Map() //동생
    
    topping.forEach((el) =>{
        map.set(el, (map.get(el) || 0) +1)
    })
    
    topping.forEach((el) =>{
        bro.set(el, (bro.get(el) || 0) +1)
        map.set(el, map.get(el)-1)
        
        if(map.get(el) === 0) map.delete(el)
        
        if(map.size === bro.size) ans++
    })
    
    
    return ans
}