abstract class Department {
    constructor(public name: string) {}

    getId(): string {
        return this.name + Math.random();
    }

    abstract printId(): void;
}

class Item extends Department{
    constructor(public name: string) {
        super(name);
    }

    printId(): void {
        const id: string = super.getId();
        console.log(id);
    }
}

const item: Item = new Item('Oliver');
// const dep: Item = new Department('Oliver');

item.printId();
