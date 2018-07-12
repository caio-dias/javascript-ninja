(function() {
    'use strict'
    /*
    Declare uma variável chamada `name` que receba seu primeiro nome.
    Mostre no console todas as letras do seu nome separadas, com a frase:
    - "[LETRA] é a [POSIÇÃO]ª letra do meu nome."
    Ex: no caso do nome ser "Fernando", deve mostrar as frases:
    - "F é a 1ª letra do meu nome."
    - "e é a 2ª letra do meu nome."
    E assim por diante, até a última.
    */
    var name = 'Caio';
    for (var index = 0; index < name.length; index++) {
        var frase = name.charAt(index) + ' é a ' + (index+1) +'ª letra do meu nome';
        console.log(frase);
    }

    /*
    - Declare uma variável chamada `fullName`, que receba seu nome completo,
    escrito no formato de slug (caixa baixa e palavras separadas por um traço).
    Ex: o nome "Fernando Daciuk" ficaria "fernando-daciuk"
    - Faça a primeira letra de cada nome ficar em caixa alta, e troque o traço
    por um espaço.
    - Detalhe: o código que você escrever abaixo deve funcionar para qualquer
    nome, então fique à vontade para usar as artimanhas que já viu até agora no
    curso para fazer isso funcionar corretamente :)
    - Mostre no console o nome no formato slug, e o resultado final. Use um
    console.log para cada formato.
    */
    var fullName = 'caio-dias-silva';
    var formataName = function(fullName) {
        var arrName = fullName.split('-');
        var formatedName = '';
        arrName.forEach(function(item) {
            formatedName += item.charAt(0).toUpperCase().concat(item.slice(1))+' ';
        });
        return formatedName.slice(0, -1);
    }
    console.log('antes: '+fullName);
    console.log('depois: '+formataName(fullName));

    /*
    - Crie um array com 5 nomes. Reduza esses nomes a uma única string, separando
    cada nome por vírgula. Entre o penúltimo e o último nome, o separador deve
    ser um "e". No final, concatene com a frase: " são meus amigos.".
    O resultado final deve ficar mais ou menos assim:
    - "João, Maria, Roberto, Pedro e Marcos são meus amigos."
    - Detalhe: o código abaixo deve funcionar com um array de qualquer tamanho.
    5 nomes foi somente uma sugestão ;)
    */
    var nomes = ['Rodriguinho', 'Romero', 'Balbuena', 'Jô', 'Cássio', 'Pedrinho'];
    var stringNomes = '';
    var penultimoNome = nomes.length-1;

    nomes.forEach(function(item, index) {
        if (index != penultimoNome) {
            stringNomes+=item+', ';
        } else {
            stringNomes+='e '+item+' são meus amigos!'
        }
    })
    console.log(stringNomes);
})();
