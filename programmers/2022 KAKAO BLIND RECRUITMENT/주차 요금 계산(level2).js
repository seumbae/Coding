function solution(fees, records) {
    let cars = new Map();
    const state = new Map();
    
    records.forEach((el) => {
        let record = el.split(' ');
        const [hour, minute] = record[0].split(':').map(e => +e)
        const car = record[1]
        const flag = record[2]
        
        if(flag === 'IN'){
            if(!cars.has(car)) cars.set(car, 0)
            state.set(car, hour*60+minute)
        }
        else if(flag === 'OUT'){
            const acc = (hour*60+minute) - state.get(car);
            state.delete(car);
            cars.set(car, cars.get(car) + acc)
        }
    })
    //출차하지 않은 남은 차량
    for(let [car, time] of state){
        cars.set(car, cars.get(car) + 1439-time) //23:59 = 1439
        state.delete(car)
    }
    
    for(let [car, acc] of cars){
        if(acc <= fees[0]){
            cars.set(car, fees[1])
        }
        else{
            cars.set(car, fees[1] + Math.ceil((acc-fees[0])/fees[2])*fees[3])
        }    
    }
    return [...cars.entries()].sort((a, b) => Number(a[0]) - Number(b[0])).map(el => el[1])
}