var pessoas = {
    'nome': 'caio',
    'idade': 24,
    'peso': 82,
    'aniversario': '22/10/1993'
}
var counter=0;
var numbers = [];

for (var pessoa in pessoas) {
    console.log('a/ou '+pessoa+' é '+pessoas[pessoa]);
    counter++;
}
console.log('a pessoa tem '+counter+' props');

function moreThan(age) {
    if (pessoas['idade'] > age) {
        return 'a pessoa é mais velha que o parametro';
    }
    return 'a pessoa nao é mais velha que o parametro';
}

console.log(moreThan('22'));

for (let index = 0; index <= 20; index++) {
    if(index % 2 == 0) {
        numbers[index] = index;
    }
}

for (let index = 0; index < numbers.length; index++) {
    console.log(numbers[index]);
    
}