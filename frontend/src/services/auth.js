import api from './api';

export const register = async (data) => {
    const response = await api.post('/user/register', data);
    return response.data;
};

export const login = async (data) => {
    const response = await api.post('/user/login', data);
    return response.data;
};

export const getProfile = async () => {
    const response = await api.get('/user/profile');
    return response.data;
};