import axios from './axios.js';


export const LoginUrl = params => axios.request({ url: 'login', method: 'post', data: params });
export const TestUrl = params => axios.request({ url: 'test', method: 'get', data: params });
export const ValidateUrl = params => axios.request({ url: 'validate', method: 'get', params });
