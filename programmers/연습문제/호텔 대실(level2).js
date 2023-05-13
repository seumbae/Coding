function solution(book_time) {
    book_time.forEach(([start, end], idx) => {
        let hour, minute;
        [hour, minute] = start.split(':').map(e=>+e);
        book_time[idx][0] = hour*60 + minute;
        [hour, minute] = end.split(':').map(e=>+e);
        book_time[idx][1] = hour*60 + minute;
    })
    
    book_time.sort((a, b) => a[0] - b[0])
    
    let as =[1, 2, 3, 4]
    let room = []
    book_time.forEach(([start, end]) => {
        if(!room.length) room.push(end);
        else{
            let idx = room.findIndex((v) => v+10 <= start)
            if(idx !== -1) room[idx] = end;
            else room.push(end);
        }
    })
    
    return room.length
}