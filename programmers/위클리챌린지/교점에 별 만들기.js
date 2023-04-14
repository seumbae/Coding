function solution(line) {
    const meets = []
    
    const len = line.length
    for(let i=0; i<len-1; i++){
        const [A, B, E] = line[i]
        for(let j=i+1; j<len; j++){
            const [C, D, F] = line[j]
            if(A*D - B*C === 0) continue;
            const x = (B*F - E*D) / (A*D - B*C)
            const y = (E*C - A*F) / (A*D - B*C)
            if(!Number.isInteger(x) || !Number.isInteger(y)) continue;
            meets.push([x,y])
        }
    }
    let [minX, maxX] = [Math.min(...meets.map(e => e[0])), Math.max(...meets.map(e => e[0]))]
    let [minY, maxY] = [Math.min(...meets.map(e => e[1])), Math.max(...meets.map(e => e[1]))]

    let ans = [...new Array(Math.abs(maxY - minY + 1))].map(() => Array(Math.abs(maxX - minX +1)).fill('.'))

    meets.forEach(([x, y]) => {
        ans[Math.abs(maxY-y)][x-minX] = '*'
    })
    return ans.map(elem => elem.join(''))
}