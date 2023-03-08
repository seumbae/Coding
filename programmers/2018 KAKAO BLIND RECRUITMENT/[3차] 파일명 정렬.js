function solution(files) {
  return files.map(elem => elem.match(/(\D*)(\d*)/))
          .sort((a,b) => {
              if(a[1].toLowerCase() < b[1].toLowerCase()) return -1;
              else if(a[1].toLowerCase() > b[1].toLowerCase()) return 1;
              else{
                  return Number(a[2]) < Number(b[2]) ? -1 : 1;
              }
          })
          .map(file => file.input)
}