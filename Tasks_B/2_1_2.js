function countN(value, k) {
	let count = 0;
	value1 = parseInt(value);
	value = value - value1;
	value = parseInt(value*Math.pow(10, k));
	for(; value; value/=10)
	{
		value1 = parseInt(value%10);
		if(value1 === 9)
		{
			count++;
		}
	}
	return count;
}


function sumN(value, k) {
	let temp = 0;
	value1 = parseInt(value);
	value = value - value1;
	value = parseInt(value*Math.pow(10, k));
	for(; parseInt(value) != 0; value/=10)
	{
		value1 = parseInt(value%10);
		temp += value1;
	}
	return temp;
}


function isEqualSum_3(value, k, n) { 
	let temp1 = 0; 
	let temp2 = 0;
	value1 = parseInt(value); 
	value = value - value1; 
	value = parseInt(value*Math.pow(10, k+n)); 
	let e = parseInt(value*Math.pow(10, (-k)));
	for(; parseInt(value) != e; value/=10){ 
		value1 = parseInt(value%10); 
		temp1 += value1;
		console.log(value1);
	}
	for(; parseInt(e) != 0; e/=10){
		value1 = parseInt(e%10);
		temp2 += value1;
		console.log(value1);
	}
	if(temp2 == temp1){
		return true;
	}
	return false;
}

///////////NEW//////////////////////

let array = [1, 2, 2, 0, 6, 5, 4];

function areDiff(value, n){
	for(let i = 0; i != n-1; ++i){
		for(let j = i+1; j != n; ++j){
			if(array[i] != array[j]){
				console.log(array[j]);
			}
		}
	}
}



//console.log(sumN(12.34567, 2));
//console.log(countN(18.3999435, 4));
//console.log(isEqualSum_3(231.453674, 2, 2));