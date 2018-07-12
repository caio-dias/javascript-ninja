(function () {
    'use strict';
    /*
    REGEX
    representado por //
    flags: g = global, i = ignore case

    Termos:
    \w = representa caract alfanumericos e _, maiusculo = negacao
    \d = numeros, maiusculo = negacao
    \s = espaço em branco, quebra de linha, tabulacao, maiusculo = negacao, [\S\s] = truque para pegar todos os caracteres do texto
    \n = quebra de linha
    \t = tabulacao
    . = qualquer caracter, menos quebra de linha
    [] = classe/lista de caracteres
    () = grupo de captura
    ^ = negacao, usa dentro da lista, ex: [^abc] = match feito com qlqr coisa que nao seja a b ou c
    {n,m} = intervalo, n = minimo de vezes que o digito vai se repitir, m = maximo de vezes, ex: /\d{2,4}/, digito que se repete minimo 2 vezes, maximo 4 vezes
    {n,} = intervalo aberto, só conta o minimo de vezes, ex: /\d{2,}/, digito que aparece no minimo 2 vezes, sem maximo de vezes
    {n} = intervalo exato, quantas vezes o numero aparecer, ex: /\d{2}/, digito que aparecer exatamente 2 vezes
    ? = opcional, se tiver o valor, ele se refere sempre ao ultimo valor, ex: /\d/d/d?/, um numero com obrigatoriamente 2 digitos, que possa ter 1 terceiro digito
    + = uma ou mais vezes o item anterior, ex: /s+/, match com a palavra assustador
    * = uma ou mais ocorrencias do item anterior, ex: /\w* / qualquer caracter seguido dele mesmo
    Parametros de função de retorno de dados:
    primeiro parametro = a regex completa
    se usar grupo de captura ():
    $+n = grupo de captura, n = numero do grupo da captura na regex
    $+& = todas capturas
    */
    
    console.log('texto original:')
    var text = '"Manuel Marques de Sousa, Conde de Porto Alegre (Rio Grande, 13 de junho de 1804 – Rio de Janeiro, 18 de julho de 1875), apelidado de "O Centauro de Luvas", foi um militar, político, abolicionista e monarquista brasileiro."';
    console.log(text)

    /*
    Vamos começar com umas brincadeiras fáceis :D
    Troque o nome "Manuel Marques de Sousa" pelo seu nome, e mostre o resultado
    no console:
    */
    console.log('Adicionando seu nome no texto:');
    console.log(text.replace(/Manuel/, 'Caio'));

    /*
    Substitua todos os números por um traço `-`. Cada caractere de número deve
    ser um traço. Mostre o resultado no console:
    */
    console.log('Trocando números por -:');
    console.log(text.replace(/\d/g, '-'));

    /*
    Substitua todas as letras (somente letras) de "D" maiúsculo até "h"
    minúsculo por "0" (número zero). Mostre o resultado no console:
    */
    console.log('Trocando de "D" a "h" por "0":');
    console.log(text.replace(/[D-h]/g, '0'));

    /*
    Substitua todos os "A" (maiúsculos ou minúsculos) por "4".
    Mostre o resultado no console:
    */
    console.log('Trocando "A" e "a" por "4":');
    console.log(text.replace(/(A|a)/g, '4'));

    /*
    Substitua a frase "O Centauro de Luvas", deixando-a em caixa alta, usando
    o método `toUpperCase()`. Mostre o resultado no console:
    */
    console.log('O Centauro de Luvas" em caixa alta:');
    console.log(text.replace(/O Centauro de Luvas/g, function(frase){
        return frase.toUpperCase();
    }));

    /*
    Agora iremos substituir as datas no formato "13 de junho de 1804" para
    "13/06/1804". A primeira coisa a fazer é criar uma função chamada
    `getMonthNumber`, que irá receber um parâmetro (será o nome do mês) e deverá
    retornar o número correspondente a esse mês.
    Ex: Se o usuário entrar com "março", deve retornar "03" (em string mesmo).
    Números com menos de dois dígitos devem ter um zero na frente.
    Crie então a função e mostre no console os retornos para os meses de março,
    setembro e dezembro.
    Use um console.log para cada mês, usando a frase:
    "O mês de [NOME DO MÊS] é representado pelo número [NÚMERO DO MÊS]."
    */
    function getMonthNumber(mes) {
        switch (mes) {
            case 'junho':
                return '06';
                break;
            case 'julho':
                return '07';
                break;
            default:
                break;
        }
    }

    /*
    Agora, declare uma variável chamada `regexDate` que irá receber a expressão
    regular que irá fazer o match com as datas. Crie grupos de captura para o
    dia, o mês e o ano. Para os meses, você pode fazer o match somente com os
    meses que estão no texto, não precisa adicionar todos.
    Com o que vimos até agora, você consegue fazer :D
    Mostre a regex no console.
    */
    var regexDate = /(\d\d) de (junho|julho) de (\d\d\d\d)/g,i;

    /*
    Agora crie a função que irá fazer o replace dos dados. A função será chamada
    de `replaceDate`. Ela deve retornar a data no formato:
    "[DIA]/[MÊS]/[ANO]"
    Após criar a função, faça o replace das datas no texto, mostrando no
    console o resultado.
    */
    console.log('Replace de datas:');
    //quando usa grupos de captura (), a funcao ira receber todos eles por parametro, primeiro para é a regex completa, segundo é o primeiro grupo, terceiro é o segundo grupo, assim por diante
    function replaceDate(regex, day, month, year) {
        return day + '/' + getMonthNumber(month) + '/' + year;
    }

    console.log(text.replace(regexDate, replaceDate));
})();