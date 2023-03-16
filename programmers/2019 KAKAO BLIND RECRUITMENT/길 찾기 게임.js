const makeNode = (elem) => {
  const node = {
      x: elem[0][0],
      y: elem[0][1],
      idx: elem[1]
  }
  return node;
}

const pre = [], post = [];

const preorder = (tree, idx) => {
  if(tree[idx]){
      pre.push(tree[idx].idx);
      preorder(tree, idx*2 +1);
      preorder(tree, idx*2 +2);
  }
}

const postorder = (tree, idx) => {
  if(tree[idx]){
      postorder(tree, idx*2 +1);
      postorder(tree, idx*2 +2);
      post.push(tree[idx].idx);
  }
}

function solution(nodeinfo) {
  nodeinfo = nodeinfo.map((elem,idx) => [elem, idx+1]).sort((a, b) => {
      if(a[0][1] === b[0][1]) return a[0][0] - b[0][0];
      return b[0][1] - a[0][1];
  })
  const tree = [];
  nodeinfo.forEach((elem) => {
      const node = makeNode(elem);
      
      let parent = 0;
      let child;
      while(tree[parent]){
          if(tree[parent].x < node.x) child = parent*2 + 2;
          else child = parent*2 + 1;
          
          parent = child;
      }
      tree[parent] = node;
  })
  
  preorder(tree,0);
  postorder(tree, 0);
  
  return [pre, post];
}
