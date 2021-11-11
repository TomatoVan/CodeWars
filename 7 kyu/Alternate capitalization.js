function capitalize(s){
  let oddString = [],
      evenString = [];
  
  for(let i = 1; i < s.length + 1; i++) {
    
    if(i % 2 != 0) {
      oddString[i-1] = s[i-1].toUpperCase();
      evenString[i - 1] = s[i-1];
    }
    else {
      oddString[i-1] = s[i-1];
      evenString[i - 1] = s[i-1].toUpperCase();
    } 
  }
  return [oddString.join(''), evenString.join('')];
}