{
    const defaultValue = function () {
        return function (target: any, propertyKey: string): any {
            console.log('accessing', target[propertyKey]);
            return {
                value: 'default'
            }
        }
    };

    class Greeter {
        @defaultValue()
        greeting: string;

        constructor(message: string) {
            console.log(this.greeting);
            // this.greeting = message;
        }
    }

    console.log(new Greeter('test'))
}