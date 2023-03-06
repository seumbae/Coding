function solution(dartResult) {
    let bonus = {'S' : 1, 'D': 2, 'T': 3};
    let darts = dartResult.match(/([0-9]+)([SDT])([*#]?)/g);
    
    for(let i=0; i<darts.length; i++){
        let num = darts[i].match(/\d+/g);
        let char = darts[i].match(/\D/g);
        
        let score = Math.pow(num, bonus[char[0]]);
        
        if(char[1] === '*'){
            score *= 2;
            if( 0 < i)
                darts[i-1] *= 2;
        }
        else if(char[1] === '#'){
            score *= -1;
        }
        darts[i] = score
    }
    
    return darts.reduce((prev, acc) => prev + acc, 0);
}