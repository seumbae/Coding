// Number로 9천조까지 가능함
const emptyRoom = (map, room) => {
  if(!map.has(room)){
      map.set(room, room+1);
      return room;
  }
  const another = emptyRoom(map, map.get(room));
  map.set(room, another+1);
  return another
}

function solution(k, room_number) {
  var ans = [];
  let map = new Map();
  
  room_number.forEach((elem) => {
      const room = emptyRoom(map, elem);
      ans.push(room);
  })
  return ans 
}