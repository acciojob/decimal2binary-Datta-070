function decimalToBinary(num) {
  //Write you code here
	let op="";
	while(num>=2){
		let reminder=num%2;
		op=reminder+op;
		num=parseInt(num/2);
	}
	if(op===1){
		op=1+op;
	}
	console.log(op);
}

window.decimalToBinary = decimalToBinary;
