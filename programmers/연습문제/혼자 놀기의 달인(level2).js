function solution(cards) {
    const box = Array(cards.length).fill(false) //false close, true open
    const group = []
    
    const dfs = (idx, cnt) =>{
        box[idx] = true;
        ++cnt;
        
        if(!box[cards[idx]-1]) dfs(cards[idx]-1, cnt)
        else{
            return group.push(cnt)
        }
    }
    
    cards.forEach((card, idx) => {
        if(!box[idx]) dfs(idx, 0)
    })
    
    group.sort((a, b) => b-a);
    return 1 < group.length ? group[0] * group[1] : 0
}