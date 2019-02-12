console.log(typeof Object)

class Produto {}
console.log(typeof Produto)

function imprimirSoma(a, b){
    console.log(a + b)    
}

imprimirSoma (2, 3) // uso padrão
imprimirSoma (2) // valor + NaN = undefined
imprimirSoma (2, 10, 4, 6) // ignora os seguintes
imprimirSoma () //NaN

function soma (a, b = 0){
    return a + b
}

console.log(soma(2,3))
console.log(soma(2))

const imprimirSoma2 = function (a, b){
    console.log(a + b)
}
imprimirSoma2(2, 3)

const soma2 = (a, b) => {
    return a + b
}
console.log(soma2(2,3))

const impr = a => console.log(a)
impr('Legal!')

const subtracao = (a, b) => a - b
console.log(subtracao(2,3))
