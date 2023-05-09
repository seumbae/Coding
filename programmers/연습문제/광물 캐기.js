function solution(picks, minerals) {
    let ans = [];
    
    const dfs = (p, m, stress) => {
        const [dia, iron, stone] = p;

        if((!dia && !iron && !stone) || !m.length) return ans.push(stress)
        
        const mineral = m.splice(0, 5);
        let diaCnt = 0, ironCnt = 0, stoneCnt = 0;
        for(let i=0; i<mineral.length; i++){
            if(mineral[i] ==='diamond') diaCnt++;
            if(mineral[i] ==='iron') ironCnt++;
            if(mineral[i] ==='stone') stoneCnt++;
        }
        
        if(dia) dfs([dia-1, iron, stone], m.slice(), stress + diaCnt + ironCnt + stoneCnt);
        if(iron) dfs([dia, iron-1, stone], m.slice(), stress + diaCnt*5 + ironCnt + stoneCnt);
        if(stone) dfs([dia, iron, stone-1], m.slice(), stress + diaCnt*25 + ironCnt*5 + stoneCnt);
        
    }
    dfs(picks, minerals, 0);
    return Math.min(...ans);
}