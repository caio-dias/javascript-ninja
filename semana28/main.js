(function() {
    'use strict';
    document.querySelector('.buscar').addEventListener('click', function () {
        var cep = document.querySelector('.valorCep').value;
        var url = 'https://viacep.com.br/ws/'+cep+'/json/';
        //instancia ajax
        var ajax = new XMLHttpRequest();
        //abre requisicao
        ajax.open('GET', url);
        //manda dados
        ajax.send();

        //readystatechange verifica quando o estado da requisicao mudou
        ajax.addEventListener('readystatechange', function () {
            //quando a conexao foi feita com sucesso o state é 4 e o status é 200
            if (ajax.readyState === 4 && ajax.status === 200) {
                document.querySelector('.mensagem').innerHTML = 'Endereço referente ao CEP: '+cep
                document.querySelector('.logradouro').innerHTML = JSON.parse(ajax.responseText).logradouro;
                document.querySelector('.bairro').innerHTML = JSON.parse(ajax.responseText).bairro;
                document.querySelector('.cidade').innerHTML = JSON.parse(ajax.responseText).localidade;
                document.querySelector('.estado').innerHTML = JSON.parse(ajax.responseText).uf;
            } else {
                document.querySelector('.mensagem').innerHTML = 'CEP: '+cep+' não encontrado!'
            }
        });
    })
})();