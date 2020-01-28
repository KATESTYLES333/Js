function romanNumb(num){
	let str = " ";
	if(num < 1 || num > 1999)
		return "Inv";
	while(num >= 1000){
		str += "M";
		num -= 1000;
	}
	while(num >= 900){
		str += "CM";
		num -= 900;
	}
	while(num >= 500){
		str += "D";
		num -= 500;
	}
	while(num >= 400){
		str += "CD";
		num -= 400;
	}
	while(num >= 100){
		str += "C";
		num -= 100;
	}
	while(num >= 90){
		str += "XC";
		num -= 90;
	}
	while(num >= 50){
		str += "L";
		num -= 50;
	}
	while(num >= 40){
		str += "XL";
		num -= 40;
	}
	while(num >= 10){
		str += "X";
		num -= 10;
	}
	while(num >= 9){
		str += "IX";
		num -= 9;
	}
	while(num >= 5){
		str += "V";
		num -= 5;
	}
	while(num >= 4){
		str += "IV";
		num -= 4;
	}
	while(num >= 1){
		str += "I";
		num -= 1;
	}
	return str;
}


function deleteSame(str){
	let s = '';
	for(let i = 0; i != str.length; ++i){
		if(str.indexOf(str[i]) == str.lastIndexOf(str[i])){
			s += str[i];
		}
	}
	return s;
}



console.log(romanNumb(12));
console.log(deleteSame('qwertyqweqw'));
