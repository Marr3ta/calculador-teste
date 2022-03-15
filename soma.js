const read = require('readline-sync')

var soma = function(a,b){
    return a+b
}

console.log(soma(parseInt(read.question("Primeiro numero: ")),(parseInt(read.question("Segundo numero: ")))))
module.exports = soma