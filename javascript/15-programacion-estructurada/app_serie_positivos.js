const { Console } = require('console-mpds')
const console = new Console()
let numbers = []

let number
let indxMax = 0
do{
    number = console.readNumber('Escribe un número de la serie positivos')
    if(number>0){
        numbers[indxMax] = number
        indxMax++
    }
}while( 0 !== number )

let indx = 0
while( indx < indxMax -1 && numbers[indx] < numbers[indx+1] ){
    indx++
}

console.write(`la secuencia de numeros ${(indx>=indxMax-1)?'':'No '}esta ordenada ascentedentemente`)
