import axios from 'axios';

const config = {
    baseURL: 'https://jsonplaceholder.typicode.com/comments'
}

const getComments = () => axios.create(config).get('');

export {getComments};