function rot13(str) {
    let decodedResult = "";
    let alphabetStart = "ABCDEFGHIJKLM";
    let alphabetEnd = "NOPQRSTUVWXYZ";
  
    for(let i = 0; i < str.length; i++){
      let letterToDecode = str[i];
  
      if(alphabetStart.indexOf(letterToDecode) >= 0){
        decodedResult += alphabetEnd[alphabetStart.indexOf(letterToDecode)];
      }else if(alphabetEnd.indexOf(letterToDecode) >= 0){
        decodedResult += alphabetStart[alphabetEnd.indexOf(letterToDecode)];
      }else{
        decodedResult += letterToDecode;
      }
    }
  
    return decodedResult;
  }
  
  let res = rot13("SERR PBQR PNZC");
  console.log(res);