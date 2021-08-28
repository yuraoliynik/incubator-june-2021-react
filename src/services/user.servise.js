import myAxios from "./myAxios";

const axiosGetUsers = () => {
    return myAxios.get('/users');
};

const axiosAddUser = (userNotFullObj) => {
    return myAxios.post('/users', userNotFullObj);
};

const axiosUpdateUser = (userObj) => {
    return myAxios.put(`/users/${userObj.id}`, userObj);
};


export {axiosGetUsers, axiosAddUser,axiosUpdateUser};