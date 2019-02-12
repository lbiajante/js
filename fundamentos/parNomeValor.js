//par nome/valor

const saudacao = 'Opa' //contexto lexico 1

function exec(){
    const saudacao = 'Falaaa' //contexto lexico 2
    return saudacao
}

//objetis são grupos aninhados de pares nome/valor

const cliente = {
    nome: 'Pedro',
    idade: 32,
    peso:90,
    endereco: {
        nome: 'Rua A',
        numero: 123
    }
}

console.log(saudacao)
console.log(exec())
console.log(cliente.nome)
console.log(cliente.endereco)
console.log(cliente.endereco.nome)