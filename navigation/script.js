console.log(document.body);

console.log(document.documentElement);

console.log(document.body.childNodes);
// позволяет получить все узлы внутри родителя

console.log(document.body.firstChild);
console.log(document.body.firstElementChild);
console.log(document.body.lastChild);
console.log(document.body.lastElementChild);

console.log(document.querySelector('#current').parentNode.parentNode);
console.log(document.querySelector('#current').parentElement);

console.log(document.querySelector('[data-current="3"]').nextSibling);
console.log(document.querySelector('[data-current="3"]').previousSibling);

console.log(document.querySelector('[data-current="3"]').nextElementSibling);
console.log(document.querySelector('[data-current="3"]').previousElementSibling);

for (let node of document.body.childNodes) {
    if (node.nodeName == "#text") {
        continue;
    }
    // просто пропустим обработку случая node.nodeName == "#text"
    console.log(node)
}