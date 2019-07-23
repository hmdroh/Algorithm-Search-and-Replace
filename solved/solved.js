function myReplace(str, before, after) {
    var regB = new RegExp(before, "ig");
    var src = str.match(regB)[0];
  
    function isCapital(x){
      if(x == x.toUpperCase()){
        return true;
      }else{
        return false;
      }
    }
    function capitalizeFirst(str){
      return str.substr(0,1).toUpperCase() + str.substr(1);
    }
  
    if(isCapital(src.charAt(0))){
      //its capital
      after = capitalizeFirst(after);
    }
    str = str.replace(regB, after);
    console.log(str);
  
    return str;
  }
  
  myReplace("A quick brown fox jumped over the lazy dog", "jumped", "leaped");