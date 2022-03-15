const read = require('readline-sync')

var div = function(a,b){
    return a/b
}

console.log(div(parseInt(read.question("Primeiro numero: ")),(parseInt(read.question("Segundo numero: ")))))
module.exports = div