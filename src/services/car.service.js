const url = 'http://192.168.1.253/api/v1/cars';
// IP с дома 195.72.146.25
// IP в офисе 192.168.1.253

function getCars() {
    return fetch(url).then(value => value.json());
}

function saveCar(carObj) {
    return fetch(url, {
        method: 'POST',
        body: JSON.stringify(carObj),
        headers: {'Content-type': 'application/json; charset=UTF-8'}
    })
        .then((response) => response.json());
}

function editCar(carObj) {
    return fetch(url + '/' + carObj.id, {
        method: 'PUT',
        body: JSON.stringify(carObj),
        headers: {
            'Content-type': 'application/json; charset=UTF-8',
        }
    })
        .then((response) => response.json());
}

function deleteCar(carId) {
    return new Promise((resolve, reject) => {
        fetch(url + '/' + carId, {method: 'DELETE'});
        resolve(`Car id ${carId} - INFO DELETED`);
    });
}

export {getCars, saveCar, editCar, deleteCar};