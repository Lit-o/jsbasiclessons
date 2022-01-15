const postData = async (url, data) => {
    const res = await fetch(url, {
        method: 'POST',
        headers: {
            'Content-type': 'application/json'
        },
        body: data
    });

    return await res.json();

    // код с меткой async всегда будет дожидаться
    // отработки таймаутов или обработки серверного взаимодействия
    // и внутри своего тела не пойдет выполнять инструкции дальше,
    // пока не дождется выполнения команды с меткой await
    // В js код выполняется справа налево и в начале произойдет
    // await fetch(), а потом присвоение res = (строка 2)
    // сначала произойдет await res.json(), а потом return (строка 10)
}