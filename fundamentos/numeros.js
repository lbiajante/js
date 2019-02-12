const peso1 = 1.0
const peso2 = Number('2.0')
console.log (peso1, peso2)
console.log (Number.isInteger(peso1))

const avaliacao1 = 9.871
const avaliacao2 = 3.56

const total = avaliacao1 * peso1 + avaliacao2 * peso2
const media = total / (peso1 + peso2)

console.log (media)
console.log(media.toFixed(2))
console.log(media.toString())
console.log(media.toString(2)) //converte em binario

//alguns cuidados - coisas diferente
 
console.log(7 / 0) // infinity != de erro
console.log('10' / 2)
console.log('show' / 2)
console.log(0.1 + 0.7) //!= 0.8 por causa do ponto flutuante


//Math

const raio = 5.6
const area = Math.PI * Math.pow(raio, 2)

console.log (area)

