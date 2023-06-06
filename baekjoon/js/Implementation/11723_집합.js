const filePath = process.platform === "linux" ? "/dev/stdin" : "../input.txt";
const input = require("fs").readFileSync(filePath).toString().trim().split("\n");

const m = +input.shift();
const set = new Set();
let ans = ''
input.forEach((command) => {
    if(command === 'all'){
        for(let i=1; i<=20; i++){
            set.add(i);
        }
    }
    else{
        let [cmd, val] = command.split(' ');
        switch(cmd){
            case 'add': set.has(+val) ? null : set.add(+val); break;
            case 'remove': set.has(+val) ? set.delete(+val) : null; break;
            case 'check': set.has(+val) ? ans+='1\n' : ans+='0\n'; break;
            case 'toggle': set.has(+val) ? set.delete(+val) : set.add(+val); break;
            case 'empty': set.clear(); break;
        }
    }
})
console.log(ans)