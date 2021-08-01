function telephoneCheck(str){
    let polishedPhone = str.replace(/-| /g, "");

    if (polishedPhone.indexOf("("< polishedPhone.indexOf(")")){
        polishedPhone = polishedPhone.replace(/\(|\)/g, "");
    }

    
}