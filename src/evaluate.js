module.exports = function evaluate(arr) {
	
	evalSign(arr, '^');
	evalSign(arr, '*'); 
	evalSign(arr, '/');
    evalSign(arr, '-');
	evalSign(arr, '+');
    return arr[0];
  
  function evalSign(arr, sign) {
	  let index = arr.indexOf(sign);
	  while(index > -1) {
		switch(sign) {
		  case '^': var val = Math.pow(arr[index - 1], arr[index + 1]); break;
		  case '*': var val = arr[index - 1] * arr[index + 1]; break;
		  case '/': var val = arr[index - 1] / arr[index + 1]; break;
		  case '+': var val = parseInt(arr[index - 1]) + parseInt(arr[index + 1]); break;
		  case '-': var val = parseInt(arr[index - 1]) - parseInt(arr[index + 1]); break;  
		}
		arr.splice(index - 1, 3, val); 
		index = arr.indexOf(sign); 
	   }
  } 
}