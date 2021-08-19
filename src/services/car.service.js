import axios from 'axios';

const config = {
    baseURL: 'http://192.168.1.253/api/v1/cars'
}

// IP с дома 195.72.146.25
// IP в офисе 192.168.1.253

function getCars() {
    return axios.create(config).get();
}

export {getCars};