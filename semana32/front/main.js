(function () {
    'use strict';

    //get
    var get = new XMLHttpRequest();
    get.open('GET', 'http://localhost:3001/user/caio');
    get.send();
    get.addEventListener('readystatechange', function() {
        if (get.readyState === 4 && get.status === 200) {
            console.log(JSON.parse(get.responseText));
        }
    })

    //post
    var post = new XMLHttpRequest();
    post.open('POST', 'http://localhost:3001/user');
    post.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');
    post.send('username=caio&user=Caio&age=24');

    post.onreadystatechange = function () {
        if(post.readyState === 4) {
            console.log('Usuario Cadastrado!', post.responseText);
        }
    }
})();