import api from './api';
import { useJwt } from "react-jwt";

export const register = async (data) => {
    const response = await api.post('/user/register', data);
    return response.data;
};

export const login = async (data) => {
    const response = await api.post('/user/login', data);
    return response.data;
};

export const getProfile = async (token) => {
    const payload = await api.post('/user/token', { token });
    console.log(payload);
    return payload;
};

export const updateProfile = async (email) => {
    const payload = await api.post('/user/newtoken', { email });
    return payload;
};

export const addUsers = async (data) => {
    const response = await api.post('/user/workshop/add', data);
    return response.data;
};

export const subtractUsers = async (data) => {
    const response = await api.post('/user/workshop/subtract', data);
    return response.data;
}

export const updateWorkshops = async (data) => {
    const response = await api.post('/user/update-workshops', data);
    return response.data;
};
