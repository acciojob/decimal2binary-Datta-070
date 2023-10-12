function decimalToBinary(num) {
  //Write you code here
	if(num==0){
		return 0;
	}
  let result="";
	while(num>0){
		result+=num%2;
		num=num/2;
	}
	return result;
}

window.decimalToBinary = decimalToBinary;
