function checkCoupon(enteredCode, correctCode, currentDate, expirationDate) {
  currentDate = new Date(currentDate);
  expirationDate = new Date(expirationDate);
  if (enteredCode === correctCode && currentDate <= expirationDate)  return true;
  else return false;
}