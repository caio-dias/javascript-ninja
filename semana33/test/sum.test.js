'use strict'

//chai serve para realizar as assercoes
const expect = require('chai').expect
//exporta o modulo
const sum = require('../src/sum')

//descricao
describe('# SUM', () => {
    //cada it é um teste
    //descrevendo o teste e chamando a funcao de callback
    it('Should SUM module to be a function', () => {
        //verifica se sum e uma funcao
        expect(sum).to.be.a('function')
    })

    it('Should SUM return 10, when i pass 1 and 9', () => {
        expect(sum(1,9)).to.be.equal(10)
    })

    it('Should SUM return 5, when i pass 2 and 3', () => {
        expect(sum(2, 3)).to.be.equal(5)
    })

    it('Should SUM return an error, if it receive just one parameter', () => {
        expect(sum(1)).to.be.an('error')
    })

    it('Should SUM return an error, if the parameter has not a number', () => {
        expect(sum('a','b')).to.be.an('error')
    })
})