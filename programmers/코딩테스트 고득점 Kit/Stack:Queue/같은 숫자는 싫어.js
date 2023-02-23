function solution(arr)
{
    var ans = [];   
    ans.push(arr[0]);
    
    let arrLen = arr.length;
             
    for(let i=1 ; i<arrLen; i++){
        const elem = arr[i];
        if(elem === ans[ans.length - 1]) continue;
        ans.push(elem);
    }

    return ans;
}