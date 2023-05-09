function solution(sequence, k) {
    var ans = [];
    let len = sequence.length;
    
    let left = right = 0;
    let sum = 0;
    let diff = Number.MAX_SAFE_INTEGER;
    
    while(right < len){
        sum += sequence[right++];
        if(sum === k && right - left < diff){
            if(right - left < diff){
                ans[0] = left;
                ans[1] = right-1;
                diff = right-left;
            }
        }
        while(k < sum){
            sum -= sequence[left++];
        }
        if(sum === k && right - left < diff){
            ans[0] = left;
            ans[1] = right-1;
            diff = right-left;
        }
    }
    return ans;
}