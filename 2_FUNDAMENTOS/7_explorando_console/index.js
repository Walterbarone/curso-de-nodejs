// mais de uma valor

const x = 10
const y = 'Walter Barone'
const z = [1, 2]

console.log(x, y, z)

//contagem de impressões
console.count(`O valor do X é ${x}, contagem:`)
console.count(`O valor do X é ${x}, contagem:`)
console.count(`O valor do X é ${x}, contagem:`)
console.count(`O valor do X é ${x}, contagem:`)
console.count(`O valor do X é ${x}, contagem:`)

//variavel entre string

console.log('O nome dele é %s, ele é programaodr', y)


// limpar o console

setTimeout(() => {
    console.clear()

}, 2000)