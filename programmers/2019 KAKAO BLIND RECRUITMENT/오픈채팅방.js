function solution(record) {
  var ans = [];
  let obj = {};
  
  record.forEach((e) => {
      const line = e.split(' ');
      
      switch(line[0]){
          case 'Enter':
              obj[line[1]] = line[2];
              break;
          case 'Change':
              obj[line[1]] = line[2];
              break;
      }
  })
  
  record.forEach((e) => {
      const line = e.split(' ');
      
      switch(line[0]){
          case 'Enter':
              ans.push(`${obj[line[1]]}님이 들어왔습니다.`)
              break;
          case 'Leave':
              ans.push(`${obj[line[1]]}님이 나갔습니다.`)
              break;
      }
  })
  
  return ans;
}

// 아래와 같이 수정가능
function solution(record) {
  var ans = [];
  let obj = {};
  let cmd = {
      'Enter': '님이 들어왔습니다.',
      'Leave': '님이 나갔습니다.'
  }
  
  record.forEach((e) => {
      const [command, id, nick] = e.split(' ');
      
      if(command !== 'Change') ans.push([command, id]);
      if(command !== 'Leave') obj[id] = nick;
  })
  
  return ans.map(([command, id]) => `${obj[id]}${cmd[command]}`);
}
