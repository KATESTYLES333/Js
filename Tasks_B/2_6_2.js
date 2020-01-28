function kDiget1_4(value, k) {
	let str = '';
	for(let i = 0; i != k; ++i)
	{
		str += Math.pow(value, i);
		console.log(str[i]);
	}
	return str[k-1];
}

function kDiget5_7_10(value, k) {
	let str = '';
	for(let i = 1; i != k+1; ++i)
	{
		str += Math.pow(i, value);
	}
	return str[k-1];
}

function kDiget_6(k) {
	let str = '';
	for(let i = 10; i != 100; ++i)
	{
		str += i;
	}
	return str[k-1];
}

function fibon(k){
	let str = '';
	let a = 0;
	let b = 1;
	for(let i = 1; i != k; ++i){
		let res = a + b;
		a = b;
		b = res;
		str += res;
	}
	return str[k];
}




console.log(kDiget1_4(15, 5));
// console.log(kDiget1_4(10, 2));
// console.log(kDiget1_4(2, 8));
// console.log(kDiget1_4(3, 2));
// console.log(kDiget5_7(1,11));
//console.log(kDiget_6(8));
//console.log(kDiget5_7_10(3,4));
//console.log(fibon(10));