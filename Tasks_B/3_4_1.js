let matrix = [[9,7], [8,6], [3,8]];

function columnIncr(arr) {
	let length = arr.length;
	for (let i = 0; i < length ; ++i){
		for(let j = 0 ; j < length - 1; ++j){
			if (arr[j] > arr[j + 1]){
				let temp = arr[j];
          		arr[j] = arr[j+1];
          		arr[j + 1] = temp;
       		}
       	}
    }
    return arr;
}

function columnsDecr(arr) {
	let length = arr.length;
	for (let i = 0; i < length ; ++i){
		for(let j = 0 ; j < length - 1; ++j){
			if (arr[j] < arr[j + 1]){
				let temp = arr[j];
          		arr[j] = arr[j+1];
          		arr[j + 1] = temp;
       		}
       	}
    }
    return arr;
}

function rowIncr(arr) {
	let length = arr.length;
	for (let i = 0; i < length ; ++i){
		for(let j = 0 ; j < length - 1; ++j){
			if (arr[i] > arr[j + 1]){
				let temp = arr[i];
          		arr[i] = arr[j+1];
          		arr[j + 1] = temp;
       		}
       	}
    }
    return arr;
}

function columnIncrement(arr) {
	let length = arr.length;
	for (let i = 0; i < length ; ++i){
		for(let j = 0 ; j < length - 1; ++j){
			if (arr[i - 1] < arr[j]){
				let temp = arr[j];
          		arr[j] = arr[i-1];
          		arr[i - 1] = temp;
       		}
       	}
    }
    return arr;
}

function rowSumIncr(arr){
	let length = arr.length;
	let sum = 0;
	for (let i = 0; i < length ; ++i){
		for(let j = 0 ; j < length - 1; ++j){
			if (arr[j] > arr[j + 1]){
				let temp = arr[j];
          		arr[j] = arr[j+1];
          		arr[j + 1] = temp;
          		temp += sum;

       		}
       	}
    }
    return arr;
}

function columnSumDecr(arr) {
	let sum = 0;
	let length = arr.length;
	for (let i = 0; i < length ; ++i){
		for(let j = 0 ; j < length - 1; ++j){
			if (arr[j] < arr[j + 1]){
				let temp = arr[j];
          		arr[j] = arr[j+1];
          		arr[j + 1] = temp;
          		temp += sum;
       		}
       	}
    }
    return arr;
}



//console.log(columnIncr(matrix));
//console.log(columnsDecr(matrix));
//console.log(rowIncr(matrix));
//console.log(rowSumIncr(matrix));
//console.log(columnSumDecr(matrix));
// console.log(columnIncrement(matrix));
