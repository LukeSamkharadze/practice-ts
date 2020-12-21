{
    class Greeter {
        greeting: string;

        constructor(message: string) {
            this.greeting = message;
        }

        @validate
        greet(name: string) {
            console.log("Hello " + name + ", " + this.greeting);
        }
    }

    new Greeter('Hello').greet('S');
    new Greeter('Hello').greet('');


    function validate(target: any, propertyName: string, descriptor: TypedPropertyDescriptor<Function>) {
        let method = descriptor.value;
        descriptor.value = function () {
            const name = arguments[0];

            if (name.length < 1) {
                throw new Error('Length should be greater than 0');
            }

            console.log(this);
            return method.apply(this, arguments);
        }
    }
}