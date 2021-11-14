const evaporator = (content, evapPerDay, threshold) => {
  let  outOfUseDays = 0,
       percentage = 100;  
  while (percentage > threshold) {
    percentage = percentage - percentage * (evapPerDay / 100);
    outOfUseDays += 1;
  }
  return outOfUseDays;
}