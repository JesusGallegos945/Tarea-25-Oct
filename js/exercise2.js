let challenge = '30 Days of JavaScript'

console.log(challenge);

console.log(challenge.length)

console.log(challenge.toUpperCase())

console.log(challenge.toLowerCase())

console.log(challenge.substring(0,2))

console.log(challenge.substring(3))

console.log(challenge.includes('Script'))

console.log(challenge.split())

console.log(challenge.split(" "))

let copanies = "Facebook, Google, Microsoft, Apple, IBM, Oracle, Amazon"
console.log(copanies.split(', '))

console.log(challenge.replace('JavaScript', 'Node'))

/*Parte 2*/ 

let cadena = '30 días de JavaScript'

console.log(cadena.charAt(15))

console.log(cadena.charCodeAt(cadena.indexOf('J')))

console.log(cadena.indexOf('a'))

console.log(cadena.lastIndexOf('a'))

let frase = 'No puedes terminar una oración con porque porque porque es una conjunción';
console.log(frase.indexOf('porque'));

console.log(frase.lastIndexOf('porque'))

console.log(frase.search('porque'))

/*Parte 3*/

let cadena1 = ' Parte 3 del ejercicio 2 '

console.log(cadena.trim())

console.log(challenge.startsWith('30'))

console.log(challenge.endsWith('JavaScript'))

console.log(cadena.match(/a/g))

let parte1 = '30 días de'
let parte2 = 'JavaScript'
console.log(parte1.concat(' ', parte2))

console.log(cadena.repeat(2))