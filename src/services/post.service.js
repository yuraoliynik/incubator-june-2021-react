import axios from "axios";

const config = {
    baseURL: 'https://jsonplaceholder.typicode.com/posts'
}

const getPostComments = (postId) => axios.create(config).get(`/${postId}/comments`);

export {getPostComments};