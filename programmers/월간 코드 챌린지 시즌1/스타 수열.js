const getCombi = (arr, num) => {
    const res = []
    if(num === 1) return arr.map((el) => [el])
    
    arr.forEach((fixed, idx, origin) => {
        const rest = origin.slice(idx+1)
        const combi = getCombi(rest, num-1)
        const attached = combi.map((el) => [fixed, ...el])
        res.push(...attached)
    })
    return res
}

function solution(a) {
    let len = a.length % 2 === 0 ? a.length : a.length-1
    
    let ans = 0
    for(let i = len; i>=2; i -= 2){
        let combis = getCombi(a, i)
        let f = true
        combis.forEach((el) => {
            const arr = []
            for(let i=0; i<el.length-1; i += 2){
                arr.push([el[i], el[i+1]])
            }
            let inter = 0
            arr[0].forEach((el) => {
                let flag = true
                for(let i=1; i<arr.length; i++){
                    if(!arr[i].includes(el)) flag = false
                }
                if(flag) inter++
            })
            if(inter === 0) return;
            
            let flag = true
            arr.forEach((el) => {
                if(el[0] === el[1]) flag = false
            })
            if(flag){
                ans = el.length;
                f = false
                return;
            }
        })
        if(!f) break
    }
    return ans
}