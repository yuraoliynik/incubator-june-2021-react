import axios from 'axios';

const config = {
    baseURL: 'https://jsonplaceholder.typicode.com/users'
}

const getUsers = () => axios.create(config).get();

const getUserPosts = (userId) => axios.create(config).get(`/${userId}/posts`);

export {getUsers, getUserPosts};