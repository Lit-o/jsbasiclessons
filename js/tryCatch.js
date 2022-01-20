'use strict';

try {
    // сюда записываем код, который нужно протестировать, 
    // если он в какой-то момент сломается, в работу запустится блок catch(error)
    // и в такой конструкции глобальный код продолжит выполняться просто
    // пропустив этот кусок кода
    console.log('All ok');
    console.log(a);
    console.log('After error');
} catch(error) {
    // у объекта error есть 3 сущности error.name error.message error.stack.
    console.log(error);
    console.log(error.name);
    console.log(error.message);
    console.log(error.stack);
} finally {
    console.log('Что-то пошло не так, попробуйте позже')
}

console.log('still ok');