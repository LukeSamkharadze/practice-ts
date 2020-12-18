{
    const returnValueByGeneric = function <T>(arg: T): T {
        return arg;
    };

    const text: string = returnValueByGeneric('str');
    const n: number = returnValueByGeneric(1);

    console.log(text);
    console.log(n);
}