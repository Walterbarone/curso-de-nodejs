const chalk = require('chalk')

const nota = 5

if(nota >=7) {
    console.log(chalk.green('Parabens! Você está aprovado'))
} else {
    console.log(chalk.bgRed.black('Você precisa fazer a prova de recuperação'))
}

