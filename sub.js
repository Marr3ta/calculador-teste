const read = require('readline-sync')

var sub = function(a,b){
    return a-b
}

console.log(sub(parseInt(read.question("Primeiro numero: ")),(parseInt(read.question("Segundo numero: ")))))
module.exports = sub