console.log('a = ', a) // hoisting
var a = 2
console.log('a = ', a)

///igual a 
var a
console.log('a = ', a)
a = 2
console.log('a = ', a)

//dentro de função funciona da mesma forma só naquele escopo
// não ocorre com let só com var
// não tem utilidade nenhuma, só curiosidade e conhecimento