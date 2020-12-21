{
    const format = function () {
        return function (target: any, propertyKey: string): any {
            return {
                value: 'default',
                writable: false
            }
        }
    };

    class Greeter {
        @format()
        greetings: string;

        constructor(message: string) {
            console.log(this.greetings);
            this.greetings = message;
        }
    }

    console.log(new Greeter('test'))
    new Greeter('test').greetings = 's';
}