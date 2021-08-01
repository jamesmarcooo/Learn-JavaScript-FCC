function palindrome(str) {
    let nospcStr = str.replace(/\W+|_/g, '').toLowerCase();
      
    let palStr = nospcStr.split("").reverse().join("");
    console.log(nospcStr,palStr);
    return (nospcStr != palStr) ? false : true;
  }
  
  palindrome("A man, a plan, a canal. Panama");