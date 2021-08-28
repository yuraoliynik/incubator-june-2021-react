import axios from 'axios';


const config ={
    baseURL: 'https://jsonplaceholder.typicode.com',
    headers: {'Content-type': 'application/json; charset=UTF-8'}
}


export default axios.create(config);