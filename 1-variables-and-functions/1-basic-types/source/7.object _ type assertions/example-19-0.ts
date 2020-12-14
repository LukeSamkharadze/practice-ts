//     Type assertions
let someString: string = 'Some string';

let l: number = (<string>someString).length;

console.log(l);