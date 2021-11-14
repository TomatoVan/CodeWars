snail = function(array) {
  if(array.length === 0) return [];
  if(array.length === 1) return array[0];
  let top = array[0].slice(0,-1);
  let right = array.map(a => a[a.length - 1]);
  let bottom = array[array.length - 1].slice(0, -1).reverse();
  let left = array.slice(1, -1).map(b => b[0]).reverse();
  let inner = array.slice(1, -1).map(c => c.slice(1, -1));
  return [].concat(top, right, bottom, left, snail(inner));
}