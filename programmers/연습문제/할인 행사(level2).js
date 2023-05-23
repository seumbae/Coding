function solution(want, number, discount) {
    let day = 0;

    const product = new Map();
    
    for(let i=0; i<10; i++){
        product.set(discount[i], (product.get(discount[i]) || 0)+1)
    }
    
    for(let i=0; i<=discount.length-10; i++){
        let flag = true;
        for(let j=0; j<want.length; j++){
            if(product.get(want[j]) !== number[j]){
                flag = false
                break;
            }
        }
        if(flag) day++;
        
        product.set(discount[i], (product.get(discount[i]) || 0)-1)
        if(product.get(discount[i]) === 0) product.delete(discount[i])
        product.set(discount[i+10], (product.get(discount[i+10]) || 0) +1)
    }
    
    return day
}