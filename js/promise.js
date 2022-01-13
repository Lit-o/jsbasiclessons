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
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            product.status = "order";
            resolve(product);
            console.log(product);
        }, 1400);
    })
}).then(data => {
    data.modify = true;
    return data;
}).then(data => {
    console.log(data)
}).catch(() => {}).finally(() => {
    console.log('Finally work')
})


// ---------------


const test = time => {
    return new Promise(resolve => {
        setTimeout(() => resolve(), time);
    });
};

// test(1000).then(() => console.log('1000 ms'));
// test(2000).then(() => console.log('2000 ms'));

Promise.all([test(1000), test(2000)]).then(() => console.log('all'));
Promise.race([test(1000), test(2000)]).then(() => console.log('all'));