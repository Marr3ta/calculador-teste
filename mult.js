const read = require('readline-sync')

var mult = function(a,b){
    return a*b
}

console.log(mult(parseInt(read.question("Primeiro numero: ")),(parseInt(read.question("Segundo numero: ")))))
module.exports = mult
