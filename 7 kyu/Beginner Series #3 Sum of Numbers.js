function getSum( a,b )
{
  
  if(a == b) {
    return a;
  }
  else
  if (a < b) {
    let c=a;
    while(a!==b){
    a++;
    c=c+a;
    }
    return c;
  }
  else
  if (a > b) {
    let c=b;
    while(a!==b){
    b++;
    c=c+b;
    }
    return c;
  }
}