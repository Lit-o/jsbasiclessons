'use strict';

console.log("Запрос данных...");

const prms = new Promise((resolve, reject) => {
    setTimeout(() => {
        console.log('Подготовка данных...');
    
        const product = {
            name: 'Comp',
            price: 122155
        };
    
        resolve(product)
    }, 1000);
})

prms.then((product) => {
    const prms2 = new Promise((resolve, reject) => {
        setTimeout(() => {
            product.status = "order";
            console.log(product);
        }, 1400);  
    })
});

// setTimeout(() => {
//     product.status = "order";
//     console.log(product);
// }, 1400);