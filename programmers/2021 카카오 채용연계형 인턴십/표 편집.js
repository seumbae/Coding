class Node{
  constructor(idx){
      this.idx = idx;
      this.prev = null;
      this.next = null;
  }
}

function solution(n, k, cmd) {
  let ans = Array(n).fill('O');
  
  let root = new Node(0, null);
  let curNode = root;
  let tmpNode = root;
  
  for(let i=1; i<n; i++){
      const newNode = new Node(i);
      
      tmpNode.next = newNode;
      newNode.prev = tmpNode;
      tmpNode = newNode;
      
      if(i === k) curNode = newNode;
  }

  let trash = [];
  
  cmd.forEach((elem) => {
      const [command, step] = elem.split(' ');
      let i=0;
      switch(command){
          case 'U':
              while(i<step && curNode.prev){
                  curNode = curNode.prev;
                  i++
              }
              break;
          case 'D':
              while(i<step && curNode.next){
                  curNode = curNode.next;
                  i++
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