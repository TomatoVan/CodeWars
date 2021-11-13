function findNb(m) {
  for ( let n = 0; ; n++ ) {
    
    if ( m > 0 ) {
      let currCubeVol = Math.pow( n+1, 3);
      m = m - currCubeVol;
    } else if ( m == 0 ) {
      return n;
    } else if ( m < 0 ) {
      return (-1);
    }
  }  
}


function sum_pairs(numArray, num){  var nums = numArray;  var sum = num;  var resultsArray = [];   for(var i = 0; i < nums.length; i++){     for(var j = 0; j < i; j++){        if(nums[i] + nums[j] == sum){           return [nums[j], nums[i]];        }      }   } }