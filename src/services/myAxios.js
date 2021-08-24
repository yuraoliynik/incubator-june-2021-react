import axios from 'axios';

const config = {
    baseURL: `http://91.201.233.14/api/v1/cars`,
    headers: {
        'Content-type': 'application/json; charset=UTF-8',
    }
}

export default axios.create(config);