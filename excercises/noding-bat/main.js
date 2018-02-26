


var everyNth = function(str, n) {
  	var newStr = "";
	for(var i = 0; i < str.length; i++) {
    	if(str.indexOf(str[i]) % n === 0) {
        	newStr += str[i];
        }
    }
  	return newStr;
}


console.log(everyNth("Chocolates", 4));
