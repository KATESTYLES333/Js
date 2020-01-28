class Animal {
	constructor(name, voice) {
		this.name = name;
		this.voice = voice;
	}

	say() {
		console.log(this.name, 'goes', this.voice);
	}
}

class Bird extends Animal {
	constructor(name, voice, canFly) {
		super(name, voice); //super дает возможность использовать конструктор из super класса
		this.say();
		this.canFly = canFly;
	}

	say() {
		console.log('Birds dont like to talk WITH U');
	}
}

const duck = new Bird('Duck', 'quack', true);
duck.say();