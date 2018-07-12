(() => {
    /*Crie um array e mostre no console a representação em String desse array,
    usando o método visto na aula 13.*/
    let nums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, true, 'teste']
    console.log(`O array em formato de string é: ${nums.toString()}`)

    /*Crie 2 arrays `sul` e `sudeste`, que serão as regiões do Brasil.
    Cada array deve conter os estados dessa região.
    Crie uma variável chamada `brasil`, que irá receber as duas regiões
    concatenadas. Mostre o `brasil` no console.*/
    let sul = ['RS', 'SC', 'PR']
    let suDeste = ['SP', 'RJ', 'MG']
    let nordeste = ['PB', 'SE', 'CE', 'AL', 'BA']
    let brasil = sul.concat(suDeste, nordeste)
    console.log(`Alguns estados do Brasil ${brasil}`)

    /*Adicione 3 novos estados da região Norte no início do array e mostre no console.*/
    brasil.unshift('AM', 'PA', 'TO');
    console.log(`Mais estados adicionados ${brasil}`)

    /*Remova o primeiro estado do array `brasil` e mostre-o no console.*/
    let estadoRemovido = brasil.splice(0, 1)
    console.log(`Estado removido: ${estadoRemovido}`)
    console.log(`Agora temos os estados: ${brasil}`)

    /*Crie um novo array chamado `newSul`, que receba somente os estados do sul, pegando do array `brasil`. Não remova esses itens de `brasil`.*/
    let newSul = brasil.slice(2, 5)
    console.log(`Os estados do sul do brasil ${newSul}`)

    /*Remova de `brasil` os estados do `sudeste`, colocando-os em uma variável chamada `newSudeste`.*/
    let newSudeste = brasil.splice(5, 3)
    console.log(`Removendo estados do Sudeste: ${newSudeste}`)

    /*
    usando forEach, percorra o array `brasil` e gere um novo array chamado
    `newBrasil`. Esse array deve ter cada item como um objeto, com as
    propriedades:
    - `id`: que será o índice do array `brasil`,
    - `estado`: que será o estado do array `brasil`.
    */
    let newBrasil = []
    brasil.forEach((item, index) => {
        newBrasil.push({'id':index,'estado':item})
    })
    console.log(newBrasil)

    /*Percorra o array `brasil` e verifique se o Ceará está incluído, atribuindo o
    resultado à uma variável. Se esse estado existir no array, mostrar a frase no
    console:
    - "Ceará está incluído!"
    Senão, mostrar a frase:
    - "Ceará não foi incluído :("*/

    let cearaIncluido = false
    brasil.forEach((item) => {
        if(item === 'CE') {
            cearaIncluido = true
        }
    })
    console.log((cearaIncluido ? 'Ceará está incluído!' : 'Ceará não está incluído!'))

    /*Percorra o array `newBrasil` e crie um novo array que some 1 no ID de cada
    objeto desse array, e adicione a frase abaixo na propriedade `estado`:
    - "[ESTADO] pertence ao Brasil."
    Atribua o novo array a uma variável chamada `map`.*/
    let newBrasilMaisUm = newBrasil.map((item, index) => {
        return {'id': index+=1, 'estado': `${item.estado} pertence ao Brasil`}
    })
    console.log(newBrasilMaisUm)

    /*Filtre o array criado acima, retornando somente os estados que tiverem
    ID par. Atribua o valor à uma variável chamada `filter`.*/
    let estadosIdPar = newBrasilMaisUm.filter((item, index) => {
        if (item.id % 2 === 0) {
            return item.estado
        }
    })
    console.log('Estados com o ID par')
    console.log(estadosIdPar)
})()