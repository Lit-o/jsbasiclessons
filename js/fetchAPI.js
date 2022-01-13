// API - набор данных и возможностей, 
// которые предоставляет нам какое-то готовое решение
// используем с помощью Интерфейса


// fetch возвращает нам Promise. 
// У fetch есть встроенный метод .json() превратит json в js-object
// У fetch есть встроенный метод .text() превратит json в text

fetch('https://jsonplaceholder.typicode.com/posts', {
    method: "POST",
    body: JSON.stringify({name: 'Aloha'}),
    headers: {
        'Content-type': 'application/json'
    }
})
.then(response => response.json())
.then(json => console.log(json));