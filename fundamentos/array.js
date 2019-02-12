const valores = [7.7, 88.9, 6.3, 9.2]
console.log(valores[0], valores[3])
console.log(valores[4])

valores[4] = 10
console.log(valores)
valores [10] = 12.2 // insere empty items
console.log(valores)
console.log(valores.length)

valores.push({id:3}, false, null, 'teste') //de preferencia fazer array com tipos homogeneos
console.log(valores)

delete valores[0] // tira o valor mas mantem as posições
console.log(valores)

console.log (valores.pop()) //imprime o ultimo valor
