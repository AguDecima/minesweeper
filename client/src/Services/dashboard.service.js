import axios from 'axios';
import { url } from './global';

export const getAllDashboards = () => {
    let headers = {
        "Content-Type" : "application/json"
    }
    let res = axios.get(`${url}/dashboard`,{headers});
    return res;
}


export const saveDashboard = (data) => {
    let headers = {
        "Content-Type" : "application/json"
    }
    let res = axios.post(`${url}/dashboard`, data,{headers});
    return res;
}

