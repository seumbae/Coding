// case1
const pre = [], post = [];
let root;

const preorder = (tree) => {
    if(tree){
        pre.push(tree.index);
        preorder(tree.left);
        preorder(tree.right);
    }
}

const postorder = (tree) => {
    if(tree){
        postorder(tree.left);
        postorder(tree.right);
        post.push(tree.index);
    }
}

class Node {
    constructor(idx, x){
        this.index = idx;
        this.x = x;
        this.left = null;
        this.right = null;
    }
}

const insert = (newNode) => {
    if(!root) root = newNode;
    else{
        subinsert(root, newNode);
    }
}

const subinsert = (tree,newNode) => {
    let dir = tree.x < newNode.x ? 'right' : 'left';
    
    if(tree[dir] === null) tree[dir] = newNode;
    else subinsert(tree[dir], newNode)
}

function solution(nodeinfo) {
    nodeinfo = nodeinfo.map((elem,idx) => [elem[0], elem[1], idx+1]).sort((a, b) => {
        if(a[1] === b[1]) return a[0] - b[0];
        return b[1] - a[1];
    })
    
    
    nodeinfo.forEach(([x, y, idx]) => {
        const node = new Node(idx, x);
        insert(node);
    })
    preorder(root);
    postorder(root);
    
    return [pre, post];
}

// case2
const pre = [], post = [];

class Node {
    constructor(idx, x){
        this.index = idx;
        this.x = x;
        this.left = null;
        this.right = null;
    }
}

class Btree{
    constructor(){
        this.root = null;
    }
    
    insert = (node) => {
        if(!this.root){
            this.root = node;
            return this
        }
        
        const set = (tree, node) => {
            const next = tree.x < node.x ? 'right' : 'left';
            if(tree[next] === null) tree[next] = node;
            else set(tree[next], node);
        }
        set(this.root, node);
    }
    preorder = (tree) => {
        let cur = tree === undefined ? this.root : tree;
        if(cur){
            pre.push(cur.index);
            this.preorder(cur.left);
            this.preorder(cur.right);
        }
    }

    postorder = (tree) => {
        let cur = tree === undefined ? this.root : tree;
        if(cur){
            this.postorder(cur.left);
            this.postorder(cur.right);
            post.push(cur.index);
        }
    } 
}

function solution(nodeinfo) {
    nodeinfo = nodeinfo.map((elem,idx) => [elem[0], elem[1], idx+1]).sort((a, b) => {
        if(a[1] === b[1]) return a[0] - b[0];
        return b[1] - a[1];
    })
    
    const tree = new Btree();
    
    nodeinfo.forEach(([x, y, idx]) => {
        const node = new Node(idx, x);
        tree.insert(node);
    })
    tree.preorder();
    tree.postorder();
    
    return [pre, post];
}
