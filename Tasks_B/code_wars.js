let names = ['Nikita', 'Nikita','Valik', 'Kate', 'Vova']; //string
let na = [{name: 'Bart'}, {name : 'Lisa'}];

function list(names){

	let str = names.slice(0, names.lenght - 1).join() + '&' + names[names.lenght - 1].toString();

	return str;
}

console.log(list(names));

let n = [ {name: 'Bart'}, {name : 'Lisa'}]; //object

function list1(n){
	let result = n.map(function(element){
		return element.name;
	});
	return result.slice(0, names.lenght - 1).join(' ,') + '&' + names[names.lenght - 1].toString();

}

console.log(list1(na));

let s = [1,2,3,4,5];