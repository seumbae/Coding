function solution(cap, n, deliveries, pickups) {
    let dist = 0;
    let deliver = 0;
    let pickup = 0;
    
    // for(let i=n-1; i>=0; i--){
    //     let cnt = 0;
    //     while(deliver < deliveries[i] || pickup < pickups[i]){
    //         cnt++;
    //         deliver += cap;
    //         pickup += cap;
    //     }
    //     deliver -= deliveries[i];
    //     pickup -= pickups[i];
    //     console.log('cnt', cnt, 'i', i, 'deliver', deliver, 'pickup', pickup)
    //     dist += ((i+1)*cnt*2)
    // }
    
    for(let i=n-1; i>=0; i--){
        deliver += deliveries[i];
        pickup += pickups[i];
        
        while(0 < deliver || 0 < pickup){
            deliver -= cap;
            pickup -= cap;
            dist += (i+1)*2
        }
    }
    return dist
}