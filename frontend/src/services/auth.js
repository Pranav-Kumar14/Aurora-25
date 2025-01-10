import api from './api';

export const register = async (data) => {
    const response = await api.post('/user/register', data);
    return response.data;
};

export const login = async (data) => {
    const response = await api.post('/user/login', data);
    console.log(response);
    return response.data;
};