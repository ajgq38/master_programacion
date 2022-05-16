const { Console } = require('console-mpds')

const console = new Console()

const text = console.readString('Escriba un texto para comprobar si es un palidromo')

const CharNotAllowed = [ 'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q',
    'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z', 'á', 'é', 'í', 'ú', 'ó', ' ']
const CharChanged = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l',
    'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z', 'a', 'e', 'i', 'o', 'u', '']

let extSanitize = ''
for (let indxText = 0; indxText < text.length; indxText++){
    let charSanitize = text[indxText]
    let indxOf = 0
    
    while( indxOf < CharNotAllowed.length && CharNotAllowed[indxOf] !== charSanitize ){
        indxOf++
    }
    textSanitize += (indxOf === CharNotAllowed.length) ? charSanitize : CharChanged[indxOf]
}
let indxMin = 0
let indxMax = textSanitize.length - 1
while(  indxMin < indxMax && textSanitize[indxMin] === textSanitize[indxMax] ) {
    indxMin++
    indxMax--
}

console.writeln(`la frase ${text} ${(indxMin>=indxMax)?'':'No '}es un palidromo`)

