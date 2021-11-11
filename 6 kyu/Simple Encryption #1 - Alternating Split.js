function encrypt(text, n) {

  if (n < 1 || text == null || text == "") return text;
  
  for (let i = 0; i < n; i++) {
    
    let evenMass = [];
    let oddMass = [];
    let evenCount = 0;
    let oddCount = 0;
    
    for (let k = 1; k < text.length + 1; k++) {
      
      if (k % 2 == 0){
        evenMass[evenCount] = text[k - 1];
        evenCount++;
      }
      else {
        oddMass[oddCount] = text[k - 1];
        oddCount++;
      }
    }
    text = [...evenMass, ...oddMass].join('');
  }
  return text;
}

function decrypt(encryptedText, n) {
  if (n < 1 || encryptedText == null || encryptedText == "") return encryptedText;
  
  for (let i = 0; i < n; i++) {
    
    let evenMass = [];
    let oddMass = [];
    let half = Math.floor((encryptedText.length) / 2);
    
    evenMass = encryptedText.slice(0, half);
    oddMass = encryptedText.slice(half, encryptedText.length);
    
    encryptedText = [];
    
    for (let k = 0; k < oddMass.length; k++) {
      encryptedText.push(oddMass[k]);
      encryptedText.push(evenMass[k]);
    }
    
    encryptedText = encryptedText.join('');
  }
  return encryptedText;
}