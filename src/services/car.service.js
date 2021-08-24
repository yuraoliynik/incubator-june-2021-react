import carAxios from "./myAxios";

const getCars = () => {
    return carAxios.get('');
};

const addCar = ({model, price, year}) => {
    return carAxios.post('', {model, price, year});
};

const updateCar = ({id, model, price, year}) => {
    return carAxios.put(`/${id}`, {id, model, price, year});
};

export {getCars, addCar, updateCar};