import axios from 'axios';
import { message } from 'antd';
import { baseConfig } from './APIConfig';

let apiBaseUrl = baseConfig.baseurl;
let errorMessage = "Амжилтгүй боллоо. ";

const auth = {
    'Access-Control-Allow-Origin': '*'
};

const API = axios.create({
    baseURL: apiBaseUrl,
    withCredentials: false,
    timeout: 240000,
    headers: auth
});

API.interceptors.request.use(function (config) {
    let token = null;

    let userInfoResp = localStorage.getItem('userInfo');
    let userInfo = {};
    if (userInfoResp) {
        userInfo = JSON.parse(userInfoResp);
        if (userInfo.token) {
            token = userInfo.token;
        }
    }

    if (config.headers && token) {
        config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
}, function (error) {
    message.error(errorMessage + error.message);
    return Promise.reject(error);
});

API.interceptors.response.use(function (response) {

    if (response.status !== 200) {
        message.error(errorMessage + response.message);
    } else if (response.data.rettype != undefined && response.data.rettype !== 0) {
        message.error(errorMessage + response.data.retmsg);
    }

    return response;
}, function (error) {
    if (error?.response?.status == 401) {
        localStorage.removeItem('userInfo');
        window.location.reload();
    } else {
        message.error(errorMessage + error.message);
    }
    return Promise.reject(error);
});

export { API };