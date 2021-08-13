const url = 'https://jsonplaceholder.typicode.com/users';

function getUsers() {
    return fetch(url).then(value => value.json());
}

function getUser(userId) {
    return fetch(url + '/' + userId).then(value => value.json());
}

function getUserPosts(userId) {
    return fetch(url + '/' + userId + '/posts').then(value => value.json());
}


export {getUsers, getUser, getUserPosts};