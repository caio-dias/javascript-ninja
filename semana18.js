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
    /*
    Crie uma função chamada `cleanCPF`, que receba um CPF por parâmetro, e
    retorne esse CPF limpo (somente os números).
    Usando os CPFs abaixo, mostre no console que a limpeza funciona para todos
    eles! Use um console.log para cada CPF.
    - "049-214 3421-1"
    - "210.458.522-05"
    - "735 500 794 - 22"
    - "101.123-131x32"
    */

    function cleanCPF (cpf) {
        return cpf.replace(/[-\s\."x]/g,'')
    }
    console.log(cleanCPF("049-214 3421-1"));
    console.log(cleanCPF("210.458.522-05"));
    console.log(cleanCPF("735 500 794 - 22"));
    console.log(cleanCPF("101.123-131x32"));

    /*
    Usando os CPFs limpos acima, deixe-os com a formatação correta de CPF.
    Ex.: "999.999.999-99"
    Mostre o resultado no console.
    */
    console.log('Formatando CPFs corretamente:');
    var cpf1 = '04921434211';
    var cpf2 = '21045852205';
    var cpf3 = '73550079422';
    var cpf4 = '10112313132';

    function formataCpf (cpf) {
        var cpfFormatado = cpf.replace(/(\d{3})(\d{3})(\d{3})(\d{2})/, function(regex,g1,g2,g3,g4) {
            return g1 + '.' + g2 + '.' + g3 + '-' + g4;
        })
        return cpfFormatado;
    }

    console.log(formataCpf(cpf1));
    console.log(formataCpf(cpf2));
    console.log(formataCpf(cpf3));
    console.log(formataCpf(cpf4));

    /*
    Crie uma expressão regular que faça match com as palavras "junho" ou "julho",
    usando o mínimo de caracteres possíveis na regex.
    Para garantir que a regex funciona, teste-a usando o método match. Se houver
    o match, o método retorna um array com os matches. Caso contrário, ele
    retornará null.
    Mostre no console o resultado do match para a frase:
    "Os meses de janeiro, junho e julho começam com a letra j."
    O resultado deve ser:
    ["junho", "julho"]
    */
    var frase = "Os meses de janeiro, junho e julho começam com a letra j.";
    var rgx = /ju[nl]ho/g
    var found = frase.match(rgx);
    console.log(found);

    /*
    Crie uma expressão regular que faça o match com a abertura de uma tag
    HTML qualquer.
    Ex.: "<div>", "<section>", "<blockquote>".
    Use o método match e faça o teste com a marcação abaixo:
    "<div><section><blockquote>Texto <img /></blockquote></section></div>"
    O resultado deve ser:
    ["<div>", "<section>", "<blockquote>"]
    */
    console.log('Match com a abertura de uma tag HTML:');
    var frase = "<div><section><blockquote><span>Texto</span> <img /></blockquote></section></div>";
    var rgx = /(<)(\w{2,})(>)/g;
    var found = frase.match(rgx);
    console.log(found);

    /*
    Crie uma expressão regular que faça o match com uma tag HTML vazia, casando
    com a abertura e fechamento da tag.
    Ex.: "<div></div>", "<section></section>", "<blockquote></blockquote>".
    Use o método match e faça o teste com a marcação abaixo:
    "<div><ul><li></li><li></li><li><span></span></li></ul></div>"
    O resultado deve ser:
    ["<li></li>", "<li></li>", "<span></span>"]
    */
    console.log('Match com tags HTML vazias (abertura e fechamento da tag):');
    var frase = "<div><ul><li></li><li></li><li><span></span></li></ul></div>";
    var rgx = /(<)(\w{2,})(>)(<\/)(\w{2,})(>)/g;
    var found = frase.match(rgx);
    console.log(found);

    /*
    Vamos complicar um pouco agora :D
    Crie uma expressão regular que faça o match com um texto existente dentro de
    uma tag HTML. O texto deve ser capturado e substituído por:
    'O texto dentro da tag "[NOME DA TAG]" é "[TEXTO]"'
    Use a marcação abaixo para fazer o replace:
    "<h1>Título da página</h1><p>Este é um parágrafo</p><footer>Rodapé</footer>"
    A marcação deve permanecer como está, somente o texto deve ser substituído.
    No replace, utilize quebras de linha para deixar uma tag por linha.
    O resultado deve ser esse:
    <h1>O texto dentro da tag "h1" é "Título da página"</h1>
    <p>O texto dentro da tag "p" é "Este é um parágrafo"</p>
    <footer>O texto dentro da tag "footer" é "Rodapé"</footer>
    Uma dica: faça o match aos poucos. Para facilitar o teste, use o site
    https://regex101.com/#javascript e verifique se as capturas estão
    corretas, para depois aplicar no código ;)
    */
    
    console.log('\nFazer replace dos textos das tags:');
    var texto = '<h1>Título da página</h1><p>Este é um parágrafo</p><footer>Rodapé</footer>';
    texto.replace(
        /<(\w+)>([^<]]+)<\/\w+>/g,
        '<$1>O texto dentro da tag $1 é $2</$2>'
    );
    console.log(texto);    
})();