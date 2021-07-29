function palindrome(str) {
    let holderOrig = [];
    let holderPal = [];
    str = str.replace(/\s/g, '');
    
    for(let i = 0; i < str.length; i++){
      holderOrig.push(str[i]);
      holderPal.unshift(str[i]);
    }
  
    for(let i = 0; i < str.length; i++){
      if(holderOrig[i] != holderPal[i]){
        return false;
      }
    }
      return true;
  }
  
  
  console.log(palindrome("eye"));