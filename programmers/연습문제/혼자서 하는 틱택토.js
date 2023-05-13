const checkWin = (board, ch) => {
    const check = [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        [0, 4, 8],
        [2, 4, 6]
    ]
    
    for(let [a, b, c] of check){
        if(board[a] === ch && board[b] === ch && board[c] === ch) return true
    }
    return false
}

function solution(board) {
    let ans = 0;
    
    board = board.map(el => el.split('')).flat();
    
    let [O, X] = [0, 0];
    
    for(let v of board){
        if(v === 'O') O++;
        else if(v === 'X') X++;
    }
    
    if(O < X || 1 <O-X) return 0;
    
    const OWin = checkWin(board, 'O');
    const XWin = checkWin(board, 'X');
    
    if(OWin && XWin) return 0;
    if(XWin && O !== X) return 0;
    if(OWin && O <= X) return 0;
    
    
    return 1;
}