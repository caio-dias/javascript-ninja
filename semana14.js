(() => {
    //reduce = reduz o array a um resultado
    const arr = [1, 2, 3, 4, 5]
    //parametros que vem por padrao no reduce
    let reduce = arr.reduce((acumulado, atual, index, array) => {
        return acumulado + atual
    }, 0)
    //0 = valor inicial da redução
    console.log(reduce)

    /*
    Crie um array chamado numberObjects. Esse array deve ter 10 elementos. Cada
    elemento será um objeto no formato:
    { number: [NUMBER] }
    Os números devem ser de 1 a 10.
    Mostre esse array no console.
    */
    const numberObjects = []
    for (let index = 0; index <=10; index++) {
        numberObjects.push({number: index})
        
    }
    console.log(numberObjects)

    /*
    Crie um array chamado `justNumbers`, que terá como elementos somente os
    números do array criado acima. Mostre esse novo array no console.
    */
    let justNumbers = numberObjects.map((item) => {
        return item.number
    })
    console.log(justNumbers)

    /*
    Crie um novo array chamado `justMod2Or3`, que receberá do array criado acima
    somente os números que forem divisíveis por 2 ou 3. Mostre esse novo array
    no console.
    */
    let justMod2Or3 = justNumbers.filter((item) => {
        return item % 2 === 0 || item % 3 === 0
    })
    console.log(justMod2Or3)

    /*
    Declare uma variável chamada operation que receba, do array criado acima, um valor reduzido pela seguinte operação:
    - Somar 1 ao último valor retornado;
    - Multiplicar o resultado pelo valor atual.
    O cálculo deve começar com zero.
    Mostre o resultado no console.
    */
    let operation = justMod2Or3.reduce((acumulado, atual) => {
        return (acumulado + 1) * atual
    }, 0)
    console.log(operation)

    /*
    Faça o mesmo cálculo passado acima, mas começando do último item para o
    primeiro. O nome da variável deve ser operation2. Mostre o resultado no
    console.
    */
    let operation2 = justMod2Or3.reduceRight((acumulado, atual) => {
        return (acumulado + 1) * atual
    }, 0)
    console.log(operation2)

    /*
    Crie um array chamado `name`. Cada elemento desse array deve ser uma sílaba
    do seu nome. Vamos reduzir esse array, juntando todas as sílabas, mas usando
    a "língua do P".
    PS.: Lembra da língua do "P"? Não? A língua do "P" é uma brincadeira
    infantil, onde você coloca a letra "P" antes de cada sílaba de uma palavra
    falada, como se você estivesse falando em código xD
    */
    const name = ['ca','io'].reduce((acumulado, atual) => {
        return acumulado + 'p'+atual
    }, '')
    console.log(name)

    /*
    Crie uma variável chamada `inversedName`, que reduzirá o array em uma string
    e atribuirá o seu nome invertido (usando o array criado acima).
    */
    const inversedName = ['c','a','i','o'].reduceRight((acumulado, atual) => {
        return acumulado + atual
    })
    console.log(inversedName)

    console.log(numberObjects)
    /*
    Verifique se existem em algum índice de numberObjects um objeto ìgual a
    { number: 2 }. Se houver, mostre no console:
    - "Existe um objeto { number: 2 } em numberObjects!"
    Senão, mostre a frase:
    - "Não existe um objeto { number: 2 } em numberObjects :("
    Consegue prever o resultado? Deixe uma mensagem no console tentando explicar
    o que acontece ;)
    */
    console.log(numberObjects.indexOf({ number: 2 }) > -1 ? 'existe no array' : 'nao existe no array')

    /*
    Verifique se `justMod2Or3` é um array. Se for, mostre-o no console, no
    formato de String.
    */
    console.log(Array.isArray(justMod2Or3) ? 'é array' : 'nao é array')
})()