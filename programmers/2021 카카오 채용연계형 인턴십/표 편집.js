const Node = function(idx, prev) {
  this.idx = idx;
  this.prev = prev;
  this.next = null;
}

function solution(n, k, cmd) {
  let ans = Array(n).fill('O');
  
  let root = new Node(0, null);
  let curNode = root;
  let prevNode = root;
  
  for(let i=1; i<n; i++){
      const newNode = new Node(i, prevNode);
      prevNode.next = newNode;
      prevNode = newNode;
      
      if(i === k) curNode = newNode;
  }
  
  let trash = [];
  
  cmd.forEach((elem) => {
      const [command, step] = elem.split(' ');
      
      switch(command){
          case 'U':
              for(let i=0; i<step; i++){
                  curNode = curNode.prev;
              }
              break;
          case 'D':
              for(let i=0; i<step; i++){
                  curNode = curNode.next;
              }
              break;
          case 'C':
              trash.push(curNode);
              
              if(curNode.next && curNode.prev){
                  curNode.prev.next = curNode.next;
                  curNode.next.prev = curNode.prev;   
                  curNode = curNode.next;
              }else if(curNode.next){
                  curNode.next.prev = null;
                  curNode = curNode.next;
              }else{
                  curNode.prev.next = null;
                  curNode = curNode.prev;
              }
              
              break;
          case 'Z':
              const node = trash.pop();
              
              if(node.prev) node.prev.next = node;
              if(node.next) node.next.prev = node;
              break;
      }
  })
  
  trash.forEach((node) => {
      ans[node.idx] = 'X';
  })

  return ans.join('');
}