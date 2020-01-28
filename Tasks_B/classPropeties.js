class Counter {

	constructor () {
		this.count = 0;
		this.increment = () => {
			this.count += Counter.incrementStep;
		}
	}
}
Counter.incrementStep = 2;
Counter.incrementAll = function (arr) {
	arr.forEach((c) => c.increment());
}
