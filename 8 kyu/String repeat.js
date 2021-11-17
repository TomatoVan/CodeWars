function repeatStr (n, s) {
  return s.repeat(n);
}


function confirmEnding(str, target) {
    let endStr = str.split('').pop();
    console.log(endStr)
  if (str.split('').pop() == target) return true;
  else return false
}

confirmEnding("Bastian", "n");