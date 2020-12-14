function buildLetters(firstLetter: string, ...restOfLetters: string[]) {
    return firstLetter + ' ' + restOfLetters.join(' ');
}

let letters = buildLetters('a', 'b', 'c', 'd');

console.log(letters);