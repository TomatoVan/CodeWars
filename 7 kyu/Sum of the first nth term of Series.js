function SeriesSum(n)
{
  let result = 0;
  if (n > 0) result = 1;
  for( let i = 1; i < n; i++) {
    result += 1/(4 + 3 * (i-1));
  }
  return result.toFixed(2).toString();
}