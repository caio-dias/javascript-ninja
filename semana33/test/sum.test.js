'use strict'

//chai serve para realizar as assercoes
const expect = require('chai').expect
//exporta o modulo
const sum = require('../src/sum')

//descricao
describe('# Tests of SUM function', () => {
    //MODO BDD
    //cada it é um teste
    //descrevendo o teste e chamando a funcao de callback
    it('Should SUM module to be a function', () => {
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

    //MODO TDD
    it('Assert', () => {
        //instanciar modulo assert que vem do node
        let assert = require('assert')
        //1 param = metodo/valor a ser testado, 2 param = valor esperado, 3 param = mensagem que aparece se o teste passar
        assert.equal(sum(20,30), 50, 'Message')
    })
})