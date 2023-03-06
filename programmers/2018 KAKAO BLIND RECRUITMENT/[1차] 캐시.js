
function solution(cacheSize, cities) {
  var ans = 0;
  
  if(cacheSize === 0) return 5 * cities.length;
  
  let cache = []
  cities.forEach((city)=> {
      city = city.toLowerCase();
      let idx = cache.indexOf(city);
      
      if(-1 < idx){
          cache.splice(idx, 1);
          ans += 1;   
      }
      else{
          if(cache.length === cacheSize) cache.shift();
          ans += 5;
      }
      cache.push(city);
  })
  return ans;
}

function solution(cacheSize, cities) {
  let cache = new Map();
  
  const Hit = (city) => {
      cache.delete(city);
      cache.set(city, 1);
      return 1;
  }
  
  const Miss = (city) => {
      if(cacheSize === 0) return 5;
      
      if(cache.size === cacheSize) cache.delete(cache.keys().next().value);
      cache.set(city, 1);
      return 5
  }
  
  const ans = cities.map((city) => cache.has(city.toLowerCase()) ? Hit(city.toLowerCase()) : Miss(city.toLowerCase()))
  return ans.reduce((acc, curr) => acc + curr, 0)
}