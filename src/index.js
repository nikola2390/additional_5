module.exports = function check(str, bracketsConfig) {
  if (str.length % 2 == 1){
		return false;
	}
 	var arr = str.split('');
 	var arr1 = [];
 	for ( var i = 0; i < arr.length; i++){
 		for ( var j = 0; j < bracketsConfig.length; j++ ){
 			if (arr[i] == bracketsConfig[j][1] && arr1[arr1.length-1] == bracketsConfig[j][0]){
 				arr1.pop();
 			} else if (arr[i] == bracketsConfig[j][0]){
 				arr1.push(arr[i]);
 			}
 		}
 	}

 	if (arr1.length == 0){
 		return true;
 	}
 	return false;
}
