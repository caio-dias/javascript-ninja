/*
Vamos desenvolver mais um projeto. A ideia é fazer uma mini-calculadora.
As regras são:
- Deve ter somente 1 input, mas não deve ser possível entrar dados nesse input
diretamente;
- O input deve iniciar com valor zero;
- Deve haver 10 botões para os números de 0 a 9. Cada botão deve ser um número;
- Deve haver 4 botões para as operações principais: soma (+), subtração(-),
multiplicação(x) e divisão(÷);
- Deve haver um botão de "igual" (=) que irá calcular os valores e um botão "CE"
que irá limpar o input, deixando-o com valor 0;
- A cada número pressionado, o input deve atualizar concatenando cada valor
digitado, como em uma calculadora real;
- Ao pressionar um botão com uma das 4 operações, deve aparecer o símbolo da
operação no input. Se o último caractere no input já for um símbolo de alguma
operação, esse caractere deve ser substituído pelo último pressionado.
Exemplo:
- Se o input tem os valores: "1+2+", e for pressionado o botão de
multiplicação (x), então no input deve aparecer "1+2x".
- Ao pressionar o botão de igual, o resultado do cálculo deve ser mostrado no
input;
- Ao pressionar o botão "CE", o input deve ficar zerado.
*/
(function() {
    'use strict'
    let input = document.querySelector('input')
    let bt = document.querySelectorAll('.bt')
    let expressao = ''

    Array.from(bt).forEach(function(item) {
        item.addEventListener('click', function() {
            if (this.innerText != '=') {
                expressao += this.innerText
                input.value = expressao                
            }
            if (this.innerText == 'CE') {
                input.value = 0
                expressao = ''
            }
            if (this.innerText == '=') {
                input.value = calcula(expressao)
            }
        })
    })

    function calcula(expressao) {
        return expressao.replace(/(\d{1,})(\+|\*|-|\/)(\d{1,})/g, function (regex, g1, g2, g3) {
                if (g2 == '+') {
                    return Number(g1) + Number(g3)
                }
                if (g2 == '-') {
                    return Number(g1) - Number(g3)
                }
                if (g2 == '*') {
                    return Number(g1) * Number(g3)
                }
                if (g2 == '/') {
                    return Number(g1) / Number(g3)
                }
        })
    }
})()
