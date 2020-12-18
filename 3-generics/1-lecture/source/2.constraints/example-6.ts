{
    const readLength = function <T>(arg: T[]): T[] {
        console.log(arg.length);
        return arg;
    };

    readLength([1,2,3]);
}