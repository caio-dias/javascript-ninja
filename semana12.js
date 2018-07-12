(() => {
    //Crie um array vazio chamado
    let books = [];
    /*
        Adicione nesse array 3 objetos, que serão 3 livros. Cada livro deve ter a
        seguintes propriedades:
        `name`: String
        `pages`: Number
        Mostre no console todos os livros.
    */
    books.push({ 'name': 'Senhor do anéis', 'pages': 300 }, { 'name': 'Game of Thrones', 'pages': 400 }, { 'name': 'Star Wars', 'pages': 500 })
    console.log(books)

    /*
        Remova o último livro, e mostre-o no console.
    */
    books.pop();
    console.log(books,'agora sobraram '+ books.length)
    console.log(`agora sobraram ${books.length} livros`)

    /*
        Converta os objetos que ficaram em `books` para strings.
        Mostre os livros nesse formato no console:
    */
    console.log(JSON.stringify(books))
    
    //Converta os livros novamente para objeto.
   // console.log(JSON.parse(books))

})();