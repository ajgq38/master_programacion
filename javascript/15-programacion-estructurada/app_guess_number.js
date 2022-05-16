const { Console } = require('console-mpds')

const console = new Console()

let option
const OPTION_MAYOR = 1
const OPTION_MENOR = 2
const OPTION_IGUAL = 3

let maxNumber = 1000000
let minNumber = 0

do{
    let sum = (maxNumber + minNumber)
    let number = ( sum %2 === 0 ) ? sum/2 : (sum-1)/2 
    
    option = console.readNumber(`¿Como es ${number} respecto a su número a advinar?\
        \n Opciones:(1) Mayor , (2) Menor, (3) Igual`)
    
    if( option === OPTION_MAYOR ){
        minNumber = number
    }else if( option === OPTION_MENOR ){
        maxNumber = number
    }
    

}while(option !== OPTION_IGUAL)
