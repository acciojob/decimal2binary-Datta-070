function decimalToBinary(num) {
  //Write you code here
  let result="";
	while(num>0){
		result+=num%2;
		num=num/2;
	}
	return result;
}

window.decimalToBinary = decimalToBinary;
