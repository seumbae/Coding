function solution(a) {
    let ans = a.length
    
    let left = 0; let leftMin = a[left]
    let right = a.length -1; let rightMin = a[right]
    
    while(left < right){
        if(leftMin < rightMin){
            if(rightMin < a[--right])
                ans--;
            else rightMin = a[right]
        }
        else{
            if(leftMin < a[++left])
                ans--;
            else leftMin = a[left]
        }
    }

    return ans
}