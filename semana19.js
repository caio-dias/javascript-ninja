/*
REGEX
representado por //
flags: g = global, i = ignore case, m = multi line

Termos:
\w = representa caract alfanumericos e _, maiusculo = negacao
\d = numeros, maiusculo = negacao
\s = espaço em branco, quebra de linha, tabulacao, maiusculo = negacao, [\S\s] = truque para pegar todos os caracteres do texto
\n = quebra de linha
\t = tabulacao
. = qualquer caracter, menos quebra de linha
[] = classe/lista de caracteres
() = grupo de captura
^ = negacao, usa DENTRO DA LISTA, ex: [^abc] = match feito com qlqr coisa que nao seja a b ou c
^ = fora da lista, serve para verificar se a string se inicia com aquele valor, ex: ^www = se a string começa com www
$ = fim da string, ex: \.br$, verifica se a string termina com .br
{n,m} = intervalo, n = minimo de vezes que o digito vai se repitir, m = maximo de vezes, ex: /\d{2,4}/, digito que se repete minimo 2 vezes, maximo 4 vezes
{n,} = intervalo aberto, só conta o minimo de vezes, ex: /\d{2,}/, digito que aparece no minimo 2 vezes, sem maximo de vezes
{n} = intervalo exato, quantas vezes o numero aparecer, ex: /\d{2}/, digito que aparecer exatamente 2 vezes
? = opcional, se tiver o valor, ele se refere sempre ao ultimo valor, ex: /\d/d/d?/, um numero com obrigatoriamente 2 digitos, que possa ter 1 terceiro digito
? = depois do repetidor, faz uma captura nao gulosa, pega o minimo de caracteres possiveis
?: = faz agrupamento sem captura
+ = uma ou mais vezes o item anterior, ex: /s+/, match com a palavra assustador
* = uma ou mais ocorrencias do item anterior, ex: /\w* / qualquer caracter seguido dele mesmo
\1 e \2 = referencia de captura, ex: <(\w)>.+<\/(\1)>, a segunda captura precisa ser igual a primeira para dar o match
Parametros de função de retorno de dados:
primeiro parametro = a regex completa
se usar grupo de captura ():
$+n = grupo de captura, n = numero do grupo da captura na regex
$+& = todas capturas
*/