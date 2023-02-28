function solution(board, moves) {
  var ans = 0;
  const N = board.length;
  const stack = [];
  
  while(moves.length){
      const pos = moves.shift()-1;
      for(let j=0; j<N; j++){
          if(board[j][pos] === 0) continue;
          else{
              stack.push(board[j][pos]);
              board[j][pos] = 0;
              break;
          }
      }
      if(2 <= stack.length){
          if(stack.at(-1) === stack.at(-2)){
              stack.pop();
              stack.pop();
              ans += 2;
          }
      }
  }
  return ans;
}