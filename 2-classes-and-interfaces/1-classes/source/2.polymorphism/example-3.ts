class AnimalCore {
    name: string;
    constructor(theName: string) { this.name = theName; }
    move(distanceInMeters: number = 0) {
        console.log(`${this.name} moved ${distanceInMeters}m.`);
    }
}

class Snake extends AnimalCore {
    constructor(name: string) { super(name); }
    move(distanceInMeters = 5) {
        console.log("Slithering...");
        super.move(distanceInMeters);
    }
}

class Horse extends AnimalCore {
    constructor(name: string) { super(name); }
    move(distanceInMeters = 45) {
        console.log('Galloping...');
        super.move(distanceInMeters);
    }
}

let animals: AnimalCore[] = [new Horse('Tommy the Palomino'), new Snake('Sammy the Python')];
animals.forEach(animal => {
    animal.move();
})