import React from 'react';

const URL = 'https://www.googleapis.com/books/v1/volumes?q=';

const consultarLivros = (autor, titulo, somentePortugues) => {
    console.log('consultarLivros');

    let filtros = (titulo != '' ? titulo : '[]') +
    '+inauthor:' + (autor != '' ? autor : '[]') +
    '&langRestrict=' + (somentePortugues ? 'pt' : '[]');

fetch(URL + filtros)
.then(function(response) {
    let data = response.json()    
    return data;
})
.then((json) => {
    var data = json.items.map(function(item) {
    return {
        key: item.id,
        titulo: item.volumeInfo.title,
        subTitulo: item.volumeInfo.subtitle,
        dataPublicacao: item.volumeInfo.publishedDate,
        descricao: item.volumeInfo.description,
        urlimagem: (item.volumeInfo.imageLinks ? item.volumeInfo.imageLinks.smallThumbnail : '')
    };
});
    console.log('data');
    return data;    
})
.catch(function(ex) {
    console.log('parsing failed', ex)
})
}

export {consultarLivros}