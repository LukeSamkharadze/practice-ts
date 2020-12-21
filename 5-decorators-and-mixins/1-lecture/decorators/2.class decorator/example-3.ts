// Class Decorators
{
    const sealed = function (constructor: Function) {
        Object.seal(constructor);
        Object.seal(constructor.prototype);
        console.log('Hello from Decorator');
    };

    const sealed2 = function (constructor: Function) {
        Object.seal(constructor);
        Object.seal(constructor.prototype);
        console.log('Hello from Decorator 2');
    };
    @sealed
    @sealed2
    class Greeter {
        greeting: string;

        constructor(message: string) {
            this.greeting = message;
            console.log(`Hello ${this.greeting} from Constructor`);
        }
    }

    new Greeter('User');

}