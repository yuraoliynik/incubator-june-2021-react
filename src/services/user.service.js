import axios from 'axios';

const config = {
    baseURL: 'https://jsonplaceholder.typicode.com/users'
}

const getUsers = () => axios.create(config).get();

export {getUsers};