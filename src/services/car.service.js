const url = 'http://192.168.1.253/api/v1/cars';
// IP с дома 195.72.146.25
// IP в офисе 192.168.1.253

function getCars() {
    return fetch(url).then(value => value.json());
}

function seveCar(car) {
    return fetch(url, {
        method: 'POST',
        body: JSON.stringify(car),
        headers: {'Content-type': 'application/json; charset=UTF-8'}
    })
        .then((response) => response.json());
}

export {getCars, seveCar};