const url = 'https://jsonplaceholder.typicode.com/comments';

function getComments() {
    return fetch(url).then(value => value.json());
}

export {getComments};