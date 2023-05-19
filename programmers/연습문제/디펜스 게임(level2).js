const search = (arr, n, k) =>{
    let total = arr.reduce((acc, cur) => acc+cur, 0)
    
    arr.sort((a, b) => b-a);
    for(let i=0; i<k && i<arr.length; i++){
        total -= arr[i]
    }

    return 0 <= total && total <= n ? true : false;
}

function solution(n, k, enemy) {
    let ans = 0;
    let left = 0, right = enemy.length;
    
    while(left <= right){
        let mid = Math.floor((left+right)/2)
        
        if(search(enemy.slice(0, mid), n, k)){
            ans = mid;
            left = mid+1;
        }
        else{
            right = mid-1;
        }
    }
    return ans
}