function solution(targets) {
    let missile = 1;
    targets.sort((a, b) => {
        if(a[1] === b[1]) return a[0] - b[0];
        else return a[1] - b[1]
    })
    let endTime = targets[0][1]
    for(let [start, end]of targets){
        if(endTime <= start){
            missile++;
            endTime = end;
        }
    }
    return missile;
}