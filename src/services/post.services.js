import axios from "axios";

const config = {
    baseURL: 'https://jsonplaceholder.typicode.com/posts'
}

const getPosts = () => axios.create(config).get();

export {getPosts};