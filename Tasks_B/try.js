//  //способы сложения двух чисел
// function sum1 (a, b){
// 	return a + b;
// }

// const sum2 = (a, b) =>{
// 	return a + b;
// }

// const sum3 = (a, b) => a + b;


// function Car (name){
// 	this.name = '';
// 	this.sayHello = function(){
// 		console.log('Hello');
// 	}
// }

// Car.prototype.changeName = function(name){
// 	this.name = name;
// };


// class A{
// 	constructor (a){
// 		this.a = a;
// 	}
// }

// class B extends A{
// 	constructor (a){
// 		super (a);
// 	}
// }


// var obj = {a: 1, b: 'qwerty', c: true};
// var{a, b, c} = obj;
// console.log(a + '' + b + '' + c);


// function getVisa(documents){
// 	console.log('Обработка документов...')
// 	let promise = new Promise(
// 	(resolve, reject) => {
// 		setTimeout(() => {
// 		if(documents === 'good'){
// 			resolve({visa: true, date: new Date().toString() });
// 		}
// 		else{
// 			reject({visa: false, date: 'fuck u'})
// 		}
// 	}, 2000);
// 	})	
// 	return promise;

// }

// getVisa('good').then((visa) => {
// 	console.log(visa);
// }).catch((error) =>{
// 	console.log(error)
// });

function squareDigits(num){
  //let res = [];
  let arr = num.toString();
  let temp = 0;
  for(let i = 0; i != arr.length; ++i){
  	temp = arr[i];
  	arr.push = parseInt(arr[i]) * parseInt(arr[i]);
  }
 return arr.join("");
}

function numToSqr(num){
    let sqr = numToString().join();
    let n;
    num = num.toString();
    for(let i=0;i<num.length;i++){
        n = (num[i]);
    	sqr.push(parseInt(n)*parseInt(n));
    }
    return sqr.join("");
}


let array = [3, 2, 8, 4, 5];

function removeSmallest(numbers) {
  throw "TODO: removeSmallest";
  let arr = [];
  let min = Math.min.apply(null, numbers);
  for(let i = 0; i != numbers.length; ++i){
    if(min > numbers[i]){
    	min = numbers[i];
    	}
	}
  for(let j = 0; j!= numbers.length; ++j)
    if(j !== numbers.indexOf(min)){
    	arr.push(numbers[j]);
    }
    return arr;
  }


function high(x){
  let arr = x.split("");
  let sum = 0;
  let alphabet = {a:1, b:2, c:3, d:4, e:5, f:6, g:7, h:8, i:9, j:10, k:11, l:12, m:13, n:14, o:15, p:16, q:17, r:18, s:19, t:20, u:21, v:22, w:23, x:24, y:25, z:26};
  let alphabet =  'abcdefghijklmnopqrstuvwxyz';
  let newArr = arr.map()
  for(let i = 0; i !=arr.length; ++i){
    sum += alphabet[arr[i]];
    }
    return sum;
  }

function feee(letter){
	let sum = 0;
	let alphabet = 'abcdefghijklmnopqrstuvwxyz'
	for(let i = 0; i != letter.length; ++i){
		sum += alphabet.indexOf(letter[i]);
	}
	return sum;
}

function high(x){
	let arr = x.split("");
	let newArr = arr.map(feee({}));
	return arr[newArr.indexOf(Math.max(...newArr))];
}

//   function high(x){
//   var arr = x.split(' ');
//   var str = 'abcdefghijklmnopqrstuvwxyz';
//   var newArr = arr.map(function(word){
//     var sum = 0;
//     for (var i = 0; i < word.length; i++) {
//       sum += str.indexOf(word[i]);
//     }
//     return sum;
//   });
//   return arr[newArr.indexOf(Math.max(...newArr))];
// }

function countSmileys(arr) {
var smileys = [":)",";)",":-)",";-)",";~)",":~)",":D",";D",":-D",":~D",";-D",";~D"];
var count = 0;

for (var i=0; i<arr.length; i++){
  for (var j=0; j<smileys.length; j++){
    if (arr[i]===smileys[j]){
      count++;
    }
  }
  }
return count;
}

function binNum(num){
  return parseInt(num, 2);
}

function fakeBin(x){
let n = x.toString();
  for(let i = 0; i != n; ++i){
    if(n[i] > 5){
    n[i] == 0;
    }
    else{
    n[i] == 1;
    }
  }
}


// function fakeBin(x) {
//   var split = x.split('');
//   var result = '';
//   for (var i=0; i<split.length; i++){
//     if(split[i]<5){
//       result += 0;
//     } else{
//       result += 1;
//     }
//   }
//   return result;
// }

let alphabet = 'abcdefghijklmnopqrstuvwxyz'.split('');
//console.log(numToSqr(9119));
//console.log(high('man i need a taxi up to ubud'), 'taxi');
// console.log(binNum(10010001));
console.log(fakeBin(2341110));