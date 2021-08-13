const url = 'https://jsonplaceholder.typicode.com/posts';

function getPosts() {
    return fetch(url).then(value => value.json());
}

export {getPosts};