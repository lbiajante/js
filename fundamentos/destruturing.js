const pessoa = {
    nome: 'Ana',
    idade: 5,
    endereco: {
        logradouro: 'Rua A',
        num: 1000
    }
}

const { nome, idade } = pessoa //chaves depois de const é o operador destruturing
console.log(nome, idade)

const { nome: n, idade:i } = pessoa
console.log (n, 1)

const { sobrenome, bemHumorada = true } = pessoa
console.log(sobrenome, bemHumorada)

const { endereco: { logradouro, num, cep } } = pessoa
console.log(logradouro, num, cep)

//detruturing em array

const [a] = [10] // declaração de array é igual a declaração de destruturing
console.log(a)

const [n1,,n3,,n5,n6 = 0] = [10, 7, 9 ,8]
console.log (n1, n3, n5, n6)

function rand ({min = 0, max = 1000}) {
    const valor = Math.random() * (max - min) + min
    return Math.floor(valor)
}

const obj = { max: 50, min:40 }
console.log(rand(obj))
console.log(rand({ min: 955 }))
console.log(rand({}))

function rand2([min = 0, max = 1000]){
    if (min > max) [min, max] = [max, min] //se > destruturing e remonta o array
    const valor = Math.random() * (max - min) + min
    return Math.floor(valor)
}

console.log(rand2([50,40])) //vai inverter minimo e maximo
console.log(rand2([992])) //passa só o mínimo e o maximo assume o padrão
console.log(rand2([,10])) //passa só o máximo
