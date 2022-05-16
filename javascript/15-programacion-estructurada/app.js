const { Console } = require("console-mpds")

const console = new Console()

const number = console.readNumber("Escribe un número? ")
const absolute = (number<0) ? - number : number
console.writeln(`El valor absolute del número ${number} es ${absolute}`)


