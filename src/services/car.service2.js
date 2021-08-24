import axios from 'axios';
import carAxios from "./myAxios";

const config = {
    baseURL: 'http://91.201.233.14/api/v1/cars',
    headers: {
        'Content-type': 'application/json; charset=UTF-8',
    }
}

const getCars = () => {
    return axios.get('', config);
};

const addCar = ({model, price, year}) => {
    return axios.post('', {model, price, year}, config);
};

const updateCar = ({id, model, price, year}) => {
    return carAxios.put(`/${id}`, {id, model, price, year}, config);
};

export {getCars, addCar, updateCar};