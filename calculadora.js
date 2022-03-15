const read = require('readline-sync')

const operacao = read.question("(+, -, /, *): ")

switch(operacao){
    case'+':
  funcSoma = require('./soma');
   break
   case'-':
   funcSoma = require('./sub');
   break
   case'/':
  funcSoma = require('./div');
   break
   case'*':
   funcSoma = require('./mult');
   break

default:
    console.log('Insira uma opcao valida!')
}