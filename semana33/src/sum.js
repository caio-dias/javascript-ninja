'use strict'

let sum = (n1, n2) => {
    if (isEmpty(n1) || isEmpty(n2)) {
        return new Error('Passe dois numeros por parametro!')
    }
    if (!isNumber(n1) || !isNumber(n2)) {
        return new Error('Os parametros devem ser numeros!')
    }
    return n1 + n2
}

let isEmpty = (arg) => !arg

let isNumber = (arg) => Object.prototype.toString.call(arg) === '[object Number]'

module.exports = sum