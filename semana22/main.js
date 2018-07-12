/*
Crie dois objetos, que serão duas pessoas. Cada um deve ter as propriedades `name` e `lastName`, preenchidos com o nome e sobrenome da pessoa.
*/
const joao = {
    name : 'Joao',
    lastName : 'Silva'
}

const jose = {
    name: 'Jose',
    lastName: 'Silva'
}

/*
Agora crie uma função chamada `getFullName` que retorne as propriedades
`name` e `lastName` dos objetos acima, formando um nome completo.
A função não deve receber nenhum parâmetro, mas as propriedades `name` e
`lastName` devem ser dinâmicas.
A mesma função deve servir para as duas pessoas (ou qualquer outra que for
criada).
Depois disso, invoque essa função, mostrando no console o nome completo das
pessoas que foram criadas anteriormente, passando as pessoas acima como
contexto da função. Use um console.log por pessoa.
*/
function getFullName () {
    return this.name+' '+this.lastName
}
console.log(getFullName.call(joao))
console.log(getFullName.call(jose))

/*
Crie uma função chamada `sum`. Essa função pode receber uma lista de
parâmetros variável, e deverá retornar a soma de todos eles.
Não use estruturas de repetição para somar os argumentos.
Na primeira linha, dentro da função, deixe um console.log para mostrar todos
os parâmetros passados para essa função.
*/
function sum() {
    console.log(arguments)
    return Array.prototype.reduce.call(arguments, function(acumulado, atual) {
        return Number(acumulado) + Number(atual)
    })
}

console.log(sum(1, 2, 9, 4, 3))
console.log(sum(1, 3, 5, 4, 5))
console.log(sum(929, 33, 3555, 3243444, 50))

/*
Declare uma variável chamada `userEntry`, que irá receber alguns valores
entrados pelo usuário. Mostre para o usuário a seguinte frase:
"Entre com alguns números que serão somados:"
*/
let userEntry = prompt('Entre com alguns números que serão somados:')

/*
Crie uma função chamada `justNumbers`, que recebe por parâmetro uma string
e remove tudo o que não for número, retornando um array somente com os números
da string. Mostre a representação em string dessa função no console.
Usando a função acima, faça a limpeza dos valores entrados pelo usuário,
atribuindo o resultado à uma variável `numbers`.
*/
function justNumbers(entry) {
    return entry.replace(/\D/g, ',').split(',')
}

let numbers = justNumbers(userEntry);
console.log(numbers)
/*
Agora com o array de números, utilize a função `sum` para somar todos os
números desse array e mostre o resultado no console.
*/
console.log(sum.apply(sum, numbers))