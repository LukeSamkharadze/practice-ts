let increase: (baseValue: number, increment: number) => number = function(x: number, y: number): number {
    return x + y;
};

const updatedValue: number = increase(3,1);

console.log(updatedValue);