var numero = 1
{
    var numero = 2
    console.log ('dentro =', numero)
}
console.log ('fora =', numero)

var numer = 1 
{
 let numer = 2
    console.log ('dentro =', numer)
}
console.log ('fora =', numer)


for (var i = 0; i < 10; i++){
    console.log (i)
}
console.log('i=', i)

var funcs = []
for (var i = 0; i < 10; i ++){
    funcs.push(function(){
        console.log(i)
    })
}
funcs[2]() // problema histórico do JS
funcs[8]()

const funcs1 = []
for (let i = 0; i < 10; i ++){
    funcs1.push(function(){
        console.log(i)
    })
}
funcs1[2]() // problema resolvido com let
funcs1[8]()